import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { emailValidator } from '../global/app.validator';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  users: any;
  message: string;

  constructor( public fb: FormBuilder, public router:Router, public loginService: LoginService,
    public httpClient: HttpClient, private snackBar:MatSnackBar){

    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  ngOnInit() {
    this.httpClient.get("assets/users.json").subscribe(data =>{
      console.log(data);
      this.users = data;
      
    });
  }

  onSubmit(){
    console.log(this.form.value);
    this.loginService.login(this.form.value)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/homepage']);
            this.loginService.getSession().subscribe(session=>{
              console.log(session);
              console.log(session['session']['user_id']);
              localStorage.setItem('user', session['session']['user_id']);
            })
        },
        error => {
          console.log(error);
          this.message = "Enter Email as n@gmail.com & Password as admin123";
          if(confirm("Looks like you don't connected with database, Do you want to continue with static data. Only for demo ")){
            this.loginWithoutBackend();
          }
            // this.alertService.error(error);
            // this.loading = false;
        });

       
  }

  forgotPassword(){
    this.snackBar.open("Not Implemeted");
  }

  loginWithoutBackend(){
    for(let i=0; i<this.users.length; i++){
      if(this.form.controls.email.value == this.users[i]["email"] && this.form.controls.password.value == this.users[i]["password"]){
        console.log("Login Success");
        this.snackBar.open("Login Successful");
        this.router.navigate(['/homepage']);
        localStorage.setItem('user', this.users[i]['user_id']);
      }else{
        this.snackBar.open("Login Failed");
      }
    }
  }
}
