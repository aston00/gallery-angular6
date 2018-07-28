
import { SignUpComponent } from './../sign-up/sign-up.component';
import { SignComponent } from './../sign.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignRouterModule } from './../sign-router/sign-router.module';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SignRouterModule
  ],
  declarations: [
    SignUpComponent,
    SignComponent,
    SignInComponent
  ],
  exports: [SignComponent]
})
export class SignModuleModule { }
