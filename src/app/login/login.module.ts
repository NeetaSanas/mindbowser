
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SharedModule } from '../global/shared.module';
import { PasswordToggleDirective } from '../global/password-toggle.directive';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { RecoverPasswordComponent } from './recover-password/recover-password.component';

export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    PasswordToggleDirective
    // ForgotPasswordComponent,
    // RecoverPasswordComponent
  ]
})
export class LoginModule { }