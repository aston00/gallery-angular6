import { ImagesService } from './../../services/images/images.service';
import { Component, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnChanges, OnDestroy {
    leftDisabled: boolean = true;
    rightDisabled: boolean = false;
    sub1: Subscription;
    sub2: Subscription;
    sub3: Subscription;
    sub4: Subscription;
    slider: HTMLElement;
    imgToPreview: number = 0;
    copiedSuccessfully: boolean = false;
    currentSection;
    disabled: boolean = false;
    images = [];
    bodyWidth: number = document.querySelector('body').offsetWidth;
    items: number = 15;
    page: number = 1;

    constructor(private route: ActivatedRoute, private imgService: ImagesService) {
        this.currentSection = this.route.snapshot.paramMap.get('section');
        this.sub1 = this.imgService.getImagesBySection(this.currentSection, this.items, this.page).subscribe((data: any) => {
            this.images = data.photos;
        });
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
            this.sub4 = ctrl.imgService.getImagesBySection(ctrl.currentSection, ctrl.items, ctrl.page).subscribe((data: any) => {
                ctrl.images = ctrl.images.concat(data.photos);
                ctrl.disabled = false;
            });
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.images) {
            this.images = changes.images.currentValue;
            document.documentElement.scrollTop = 0;
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
        this.rightDisabled = index == this.images.length - 1
        this.imgToPreview = index;

        if (this.images.length - 1 === index) {
            this.page++;
            this.sub3 = this.imgService.getImagesBySection(this.currentSection, this.items, this.page).subscribe((data: any) => {
                this.images = this.images.concat(data.photos);
                this.disabled = false;
                this.rightDisabled = !(this.images.length - 1 > index);
            });
        }
    }

    showNextImage() {
        this.copiedSuccessfully = false;
        this.leftDisabled = false;

        if (!this.images[this.imgToPreview + 7]) {
            this.page++;
            this.disabled = true;
            this.sub2 = this.imgService.getImagesBySection(this.currentSection, this.items, this.page).subscribe((data: any) => {
                this.images = this.images.concat(data.photos);
                this.disabled = false;
            });
        }
        this.rightDisabled = this.imgToPreview + 2 >= this.images.length;

        if (this.imgToPreview == this.images.length - 1)
            return;
        this.imgToPreview++;

        let sliderWidth: number = this.slider.offsetWidth;
        let f = this.imgToPreview / 3;
        Number.isInteger(f) && (this.slider.scrollLeft = f * sliderWidth);
    }

    showPrevImage() {
        this.copiedSuccessfully = false;
        this.leftDisabled = this.imgToPreview - 2 < 0;
        this.rightDisabled = false;

        if (this.imgToPreview == 0)
            return;

        this.imgToPreview--;

        let sliderWidth: number = this.slider.offsetWidth;
        let f: number = (this.imgToPreview + 1) / 3;
        this.slider.scrollLeft = Number.isInteger(f) ? (f * sliderWidth - sliderWidth) :
            (Math.floor(f) * sliderWidth);
    }

    copyToClipboard() {
        let newElement = document.createElement('input');
        const bodyElement: HTMLElement = document.querySelector('body');
        newElement.style.position = 'absolute';
        newElement.style.top = '-2000rem';
        newElement.style.left = '-2000rem';
        newElement.value = this.images[this.imgToPreview].url;
        bodyElement.appendChild(newElement);
        newElement.select();
        let clipboardCopy = document.execCommand('copy');
        clipboardCopy ? (this.copiedSuccessfully = true) : console.log('error while copying to clipbaord');
        bodyElement.removeChild(newElement);
    }
};




