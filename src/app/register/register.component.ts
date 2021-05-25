import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LoginService } from '../login/login.service';
import { emailValidator, matchingPasswords } from '../global/app.validator';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  public form:FormGroup;
  users : any= [];
  maxDate = new Date();

  constructor(public fb: FormBuilder, public router:Router, public httpClient:HttpClient,
    public loginService:LoginService, public snackBar: MatSnackBar){
    
    this.form = this.fb.group({
      'first_name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'last_name': [null, Validators.compose([Validators.required, Validators.minLength(1)])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'birthdate': ['', Validators.required],
      'address': ['', Validators.required],
      'company': [''],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    },{validator: matchingPasswords('password', 'confirmPassword')});
  }

  ngOnInit(){
    this.httpClient.get("assets/users.json").subscribe(data =>{
      console.log(data);
      this.users = data;
    });


    this.form.controls.email.valueChanges.subscribe(email=>{
      console.log(email);
      for(let i=0; i<this.users.length; i++){
        if(this.form.controls.email.value == this.users[i]["email"]){
          console.log("Already Exists");
          this.form.controls.email.setErrors({'invalid':true, 'message': "Email already exists"});
        }else{
          this.form.controls.email.setErrors(null);
        }
      }
    });
    
    
   
  }

  public onSubmit(){
    //console.log(this.form)
    if (this.form.valid) {
      this.loginService.register(this.form.value).subscribe(result =>{
        //console.log(result);
        if(result == true){
          this.snackBar.open('Registration successfull!');
          this.router.navigate(['/login']);
        }else if(result == false){
          this.snackBar.open('Registration failed!');
          this.router.navigate(['/login']);
        }else if(result == "exist"){
          this.snackBar.open('Already Exist, Please login');
          this.router.navigate(['/login']);
        }
      },
      error => {
        console.log(error);
          alert("Looks like you don't have connected with database. Try login with static login details.")
          // this.alertService.error(error);
          // this.loading = false;
      });
      this.router.navigate(['/login']);
    }
    this.router.navigate(['/login']);
  }
}