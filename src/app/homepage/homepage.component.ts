import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { SubscriptionService } from './subscription.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public items = [
    { package_name: 'starter', price: 19, desc: 'Simplest package to get you started', count: '100', storage: '50 GB', support: false, ssl: false },
    { package_name: 'premium', price: 49, desc: 'The most popular package we offer', count: '2000', storage: '500 Gb', support: false, ssl: false },
    { package_name: 'business', price: 79, desc: 'The perfect package for your small business', count: 'Unlimited', storage: '1 TB', support: true, ssl: false },
    { package_name: 'enterprise', price: 159, desc: 'Our most advanced & complete package', count: 'Unlimited', storage: 'Unlimited', support: true, ssl: true }
  ]
  subscriptionList :any = [];
  currentDate: any;
  showSubscription: boolean = false;
  exist = false;

  constructor(public loginService:LoginService, public router: Router, public snackBar:MatSnackBar,
    public dialog: MatDialog, public subService: SubscriptionService, public datePipe: DatePipe) { 
      this.currentDate = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');
    }

  ngOnInit(): void {
    this.loadStripe();

    this.loginService.getSession().subscribe(session=>{
      console.log(session);
    });
    this.getSubscriptionList();
    
  }
  getSubscriptionList(){
    this.subService.getSubscriptionList().subscribe(data=>{
      console.log(data);
      this.subscriptionList = data;
      for(let i=0;i<this.subscriptionList.length;i++){
        this.subscriptionList[i]["start_date"] = this.datePipe.transform(this.subscriptionList[i]['start_date'], 'dd-MM-yyyy');
        this.subscriptionList[i]["end_date"] = this.datePipe.transform(this.subscriptionList[i]['end_date'], 'dd-MM-yyyy');
        if(this.subscriptionList[i]['end_date'] > this.currentDate){
          this.showSubscription = true;
        }else{
          this.showSubscription = false;
        }
      }
    },
    error => {
      console.log(error);
      this.subscriptionList = null;
        // this.alertService.error(error);
        // this.loading = false;
    });
  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(s);
    }
  }

  buy(item) { //CARD NO 4242 4242 4242 4242
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51IudUaSJYmBu1ez60Gerwee2ob0K7dlbbryng5XOeZLehSllKhjcZKC6YIa9mcsjMVD1L4DgU4qPOF30OjhAerny00xeLagm23',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        console.log(token.id);
        this.token = token.id;
      },
    });
    handler.open({
      name: 'Testing payment',
      description: 'Card No: 4242 4242 4242 4242',
      amount: item.price * 100,
    });
    console.log(item);
    this.makePayment(item);
  }

  makePayment(item){
    
    for(let i=0;i<this.subscriptionList.length;i++){ //IF ALREADY SUBSCRIBED PACKAGE CAN'T RESUBSCRIBE
      
      if(this.subscriptionList[i]['package_name'] == item.package_name){
        this.exist = true;
      }else{
        this.exist = false;
      }

    }

    console.log(this.exist);
    if(this.exist == false){
        this.subService.makePayment(item).subscribe(result=>{
          //console.log(result);
          if(result == true){
            this.getSubscriptionList();
          }else{
            this.snackBar.open('Subscription Failed');
          }
        });
    }else{
      alert("You have already subscibed to this package");
    }
    
  }

  cancel(subscription_id){
    //console.log(subscription_id);
    if(confirm("Are you sure to cancel? This Action can't revert")){
      this.subService.cancelPackage(subscription_id).subscribe(result=>{
        //console.log(result);
        this.getSubscriptionList();
      })
    }
  }

  resume(subscription_id){
    console.log(subscription_id);
    if(confirm("Are you sure to resume?")){
      this.subService.resumePackage(subscription_id).subscribe(result=>{
        //console.log(result);
        this.getSubscriptionList();
      })
    }
  }

  logout(){
    this.loginService.logout().subscribe(result => {
      //console.log(result);
      if(result == 1){
        this.router.navigate(['/login']);
        this.snackBar.open("Logged Out");
      }
    },
    error => {
      console.log(error);
      if(confirm("Looks like you don't connected with database, Do you want to continue with static data. Only for demo ")){
        this.router.navigate(['/login']);
      }
        // this.alertService.error(error);
        // this.loading = false;
    }); 
    localStorage.removeItem('user');
  }

  ngOnDestroy(){
    localStorage.removeItem('user');
  }

}
