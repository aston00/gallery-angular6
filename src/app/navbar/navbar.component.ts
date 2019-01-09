import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
    sub1: Subscription;
    carouselRouter: boolean;

    constructor(private router: Router) {
        this.sub1 = this.router.events
            .subscribe(event => {
                event && event['url'] && (event['url'].indexOf('carousel') !== -1) && (this.carouselRouter = true);
            });
    }

    ngOnDestroy(): void {
        this.sub1 && this.sub1.unsubscribe();
    }

}
