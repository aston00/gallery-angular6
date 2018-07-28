import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // @ViewChild('password') password: string;
  email: string = '';
  password: string = '';
  constructor() { }

  showSubmit() {
    console.log(this.email, this.password);
  }

  ngOnInit() {
  }

}
