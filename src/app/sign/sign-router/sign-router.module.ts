import { SignInComponent } from './../sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';

const routes: Routes = [
  { path: 'sign/signup', component: SignUpComponent },
  { path: 'sign/signin', component: SignInComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class SignRouterModule { }
