import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string = '';
  password: string = '';
  confirm: string = '';
  botCheck: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  checking(){
    console.log(this.email)
    console.log(this.password)
    console.log(this.confirm)
    console.log(this.botCheck)
  }
}
