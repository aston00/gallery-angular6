import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  router;
  sub1: Subscription;
  carouselRouter;

  constructor(private _router: Router) {
    this.router = _router;
    this.sub1 = this.router.events.subscribe(event => {
      event && event.url && (event.url.indexOf('carousel') !== -1) && (this.carouselRouter = true);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub1 && this.sub1.unsubscribe();
  }

}
