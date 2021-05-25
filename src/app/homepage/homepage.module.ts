
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../global/shared.module';
import { HomepageComponent } from './homepage.component';

export const routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' }
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
    HomepageComponent,
  ],
  providers:[DatePipe]
})
export class HomepageModule { }