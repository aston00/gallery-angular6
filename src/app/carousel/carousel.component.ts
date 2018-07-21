import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnChanges {
  leftDisabled: boolean = true;
  rightDisabled: boolean = false;
  imgToPreview: number = 0;
  copiedSuccessfully: boolean = false;
  images = [];
  constructor() { }

  bodyWidth = document.querySelector('body').offsetWidth;



  ngOnChanges(changes: SimpleChanges){
    if (changes.images) {
      this.images = changes.images.currentValue;
      document.documentElement.scrollTop = 0;
    };
  };

  //Showing chosen item 
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
    this.rightDisabled = this.imgToPreview + 2 >= this.images.length;
    if (this.imgToPreview == this.images.length - 1)
      return;

    //Showing next image
    this.imgToPreview++;

    //Moving slider in the bottom slider section
    let slider: HTMLElement = document.querySelector('.carousel-bottomt-slider');
    let sliderWidth = slider.offsetWidth;
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
    let sliderWidth = slider.offsetWidth;
    let f = (this.imgToPreview + 1) / 3;
    if (Number.isInteger(f))
      document.querySelector('.carousel-bottomt-slider').scrollLeft = f * sliderWidth - sliderWidth;
    else
      document.querySelector('.carousel-bottomt-slider').scrollLeft = Math.floor(f) * sliderWidth;

  };


  copyToClipboard() {

    //Creating input out of user's view
    let newElement = document.createElement('input');
    let bodyElement = document.querySelector('body');
    //To prevent user from seeing created input
    newElement.style.position = 'absolute';
    newElement.style.top = '-2000rem';
    newElement.style.left = '-2000rem';

    //Passing image link into input field
    newElement.value = this.images[this.imgToPreview];

    //Appending element to body and adding link to the clipboard
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




