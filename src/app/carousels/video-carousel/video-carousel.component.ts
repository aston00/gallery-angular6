import { VideosService } from './../../services/videos/videos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-video-carousel',
    templateUrl: './video-carousel.component.html',
    styleUrls: ['./video-carousel.component.css']
})
export class VideoCarouselComponent implements OnInit, OnDestroy {
    leftDisabled: boolean = true;
    rightDisabled: boolean = false;
    videoToPreview: number = 0;
    sub1: Subscription;
    sub2: Subscription;
    sub3: Subscription;
    sub4: Subscription;
    slider: HTMLElement;
    copiedSuccessfully: boolean = false;
    currentSection: string;
    disabled: boolean = false;
    videos = [];
    bodyWidth: number = document.querySelector('body').offsetWidth;
    items: number = 15;
    page: number = 1;

    constructor(private videoServics: VideosService, public router: Router, public route: ActivatedRoute) {
        this.currentSection = this.route.snapshot.paramMap.get('section');
        this.sub1 = this.videoServics.getVideo(this.currentSection, this.items, this.page)
            .subscribe((data: any) => { this.videos = data.videos });
    }

    ngOnInit() {
        let ctrl = this;
        this.slider = document.querySelector('.carousel-bottomt-slider');
        this.slider.addEventListener('scroll', function (e) {
            ctrl.scrollEventFunction(e, ctrl);
        });
    }

    scrollEventFunction(e, ctrl) {
        let event = <HTMLElement>e.target;
        if ((event.scrollWidth - 840) < event.scrollLeft) {
            ctrl.page++;
            this.sub4 = ctrl.videoServics.getVideo(ctrl.currentSection, ctrl.items, ctrl.page).subscribe((data: any) => {
                ctrl.videos = ctrl.videos.concat(data.videos);
                ctrl.disabled = false;
            });
        }
    }

    ngOnDestroy() {
        let ctrl = this;
        this.sub1 && this.sub1.unsubscribe();
        this.sub2 && this.sub2.unsubscribe();
        this.sub3 && this.sub3.unsubscribe();
        this.sub4 && this.sub4.unsubscribe();
        this.slider.removeEventListener('scroll', function (e) {
            ctrl.scrollEventFunction(e, ctrl);
        });
    }

    showChosenItem(index) {
        this.copiedSuccessfully = false;
        this.leftDisabled = index == 0;
        this.rightDisabled = index == this.videos.length - 1
        this.videoToPreview = index;
        if (this.videos.length - 1 === index) {
            this.page++;
            this.sub3 = this.videoServics.getVideo(this.currentSection, this.items, this.page).subscribe((data: any) => {
                this.videos = this.videos.concat(data.videos);
                this.disabled = false;
                this.rightDisabled = !(this.videos.length - 1 > index);
            });
        }
    }

    showNextImage() {
        this.copiedSuccessfully = false;
        this.leftDisabled = false;

        if (!this.videos[this.videoToPreview + 7]) {
            this.page++;
            this.disabled = true;
            this.sub2 = this.videoServics.getVideo(this.currentSection, this.items, this.page).subscribe((data: any) => {
                this.videos = this.videos.concat(data.videos);
                this.disabled = false;
            });
        }
        this.rightDisabled = this.videoToPreview + 2 >= this.videos.length;

        if (this.videoToPreview == this.videos.length - 1)
            return;

        this.videoToPreview++;
        let sliderWidth: number = this.slider.offsetWidth;
        let f = this.videoToPreview / 3;
        Number.isInteger(f) && (this.slider.scrollLeft = f * sliderWidth);
    }


    showPrevImage() {
        this.copiedSuccessfully = false;
        this.leftDisabled = this.videoToPreview - 2 < 0;
        this.rightDisabled = false;
        if (this.videoToPreview == 0)
            return;
        this.videoToPreview--;
        let sliderWidth: number = this.slider.offsetWidth;
        let f: number = (this.videoToPreview + 1) / 3;
        this.slider.scrollLeft = Number.isInteger(f) ? (f * sliderWidth - sliderWidth) :
            (Math.floor(f) * sliderWidth);
    }
}
