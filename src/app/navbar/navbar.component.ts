import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  router;
  carouselRouter;
  constructor(private _router: Router ) {
    this.router = _router;
    this.router.events.subscribe(event => {
        if(event && event.url && event.url.indexOf('carousel') !== -1){
          this.carouselRouter = true;
        }
    });
   }

  ngOnInit() {
    console.log(this.router);
  }

}
