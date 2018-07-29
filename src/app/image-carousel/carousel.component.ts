import { ImagesService } from './../services/images/images.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnChanges {
    leftDisabled: boolean = true;
    rightDisabled: boolean = false;
    imgToPreview: number = 0;
    copiedSuccessfully: boolean = false;
    currentSection;
    disabled: boolean = false;
    images = [];
    bodyWidth: number = document.querySelector('body').offsetWidth;
    items: number = 15;
    page: number = 1;
    constructor(private router: Router, private route: ActivatedRoute, private imgService: ImagesService) {
        this.currentSection = this.route.snapshot.paramMap.get('section');

        this.imgService.getImagesBySection(this.currentSection, this.items, this.page).subscribe((data: any) => {
            this.images = data.photos;
        });
    };

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.images) {
            this.images = changes.images.currentValue;
            document.documentElement.scrollTop = 0;
        };
    };

    showChosenItem(index) {
        this.copiedSuccessfully = false;
        //Checking whether item we choose is eithe last or first 
        this.leftDisabled = index == 0;
        this.rightDisabled = index == this.images.length - 1
        this.imgToPreview = index;
    };

    showNextImage() {
        this.copiedSuccessfully = false;
        //Arrows accessibility section
        this.leftDisabled = false;

        if (!this.images[this.imgToPreview + 7]) {
            this.page++;
            this.disabled = true;
            this.imgService.getImagesBySection(this.currentSection, this.items, this.page).subscribe((data: any) => {
                this.images = this.images.concat(data.photos);
                this.disabled = false;
            });
        }

        this.rightDisabled = this.imgToPreview + 2 >= this.images.length;
        if (this.imgToPreview == this.images.length - 1)
            return;

        //Showing next image
        this.imgToPreview++;

        //Moving slider in the bottom slider section
        let slider: HTMLElement = document.querySelector('.carousel-bottomt-slider');
        let sliderWidth: number = slider.offsetWidth;
        let f = this.imgToPreview / 3;
        if (Number.isInteger(f))
            document.querySelector('.carousel-bottomt-slider').scrollLeft = f * sliderWidth;
    };

    showPrevImage() {
        this.copiedSuccessfully = false;
        //Arrows accessibility section
        this.leftDisabled = this.imgToPreview - 2 < 0;
        this.rightDisabled = false;
        if (this.imgToPreview == 0)
            return;

        //Showing previous image
        this.imgToPreview--;

        //Moving slider in the bottom slider section
        let slider: HTMLElement = document.querySelector('.carousel-bottomt-slider');
        let sliderWidth: number = slider.offsetWidth;
        let f: number = (this.imgToPreview + 1) / 3;
        if (Number.isInteger(f))
            document.querySelector('.carousel-bottomt-slider').scrollLeft = f * sliderWidth - sliderWidth;
        else
            document.querySelector('.carousel-bottomt-slider').scrollLeft = Math.floor(f) * sliderWidth;

    };

    copyToClipboard() {

        //Creating input out of user's view
        let newElement = document.createElement('input');
        let bodyElement: HTMLElement = document.querySelector('body');
        //To prevent user from seeing created input
        newElement.style.position = 'absolute';
        newElement.style.top = '-2000rem';
        newElement.style.left = '-2000rem';
        debugger;
        //Passing image section into input field
        newElement.value = this.images[this.imgToPreview].url;

        //Appending element to body and adding section to the clipboard
        bodyElement.appendChild(newElement);
        newElement.select();
        let clipboardCopy = document.execCommand('copy');

        if (clipboardCopy)
            this.copiedSuccessfully = true;
        else
            console.log('error while copying to clipbaord');

        //Removing created element from the body
        bodyElement.removeChild(newElement);
    };
}




