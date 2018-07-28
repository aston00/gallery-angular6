import { SignUpComponent } from './../sign-up/sign-up.component';
import { SignComponent } from './../sign.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SignUpComponent,
    SignComponent,
    SignInComponent
  ],
  exports: [SignComponent]
})
export class SignModuleModule { }
