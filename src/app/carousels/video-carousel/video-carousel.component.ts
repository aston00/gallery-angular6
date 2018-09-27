import { VideosService } from './../../services/videos/videos.service';
import { Component, OnInit, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: ['./video-carousel.component.css']
})
export class VideoCarouselComponent implements OnInit, OnChanges, OnDestroy {
  leftDisabled: boolean = true;
  rightDisabled: boolean = false;
  videoToPreview: number = 0;
  sub1: Subscription;
  sub2: Subscription;
  copiedSuccessfully: boolean = false;
  currentSection: string;
  disabled: boolean = false;
  videos = [];
  bodyWidth: number = document.querySelector('body').offsetWidth;
  items: number = 15;
  page: number = 1;
  constructor(private videoServics: VideosService, public router: Router, public route: ActivatedRoute) {
    this.currentSection = this.route.snapshot.paramMap.get('section');
  }

  ngOnInit() {
    this.sub1 = this.videoServics.getVideo(this.currentSection, this.items, this.page)
      .subscribe((data: any) => { this.videos = data.videos });
  }


  ngOnChanges(changes: SimpleChanges) {
    // if (changes.images) {
    //     this.images = changes.images.currentValue;
    //     document.documentElement.scrollTop = 0;
    // };
  };

  showChosenItem(index) {
    this.copiedSuccessfully = false;
    //Checking whether item we choose is eithe last or first 
    this.leftDisabled = index == 0;
    this.rightDisabled = index == this.videos.length - 1
    this.videoToPreview = index;
  };

  showNextImage() {
    this.copiedSuccessfully = false;
    //Arrows accessibility section
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

    //Showing next image
    this.videoToPreview++;

    //Moving slider in the bottom slider section
    const slider: HTMLElement = document.querySelector('.carousel-bottomt-slider');
    let sliderWidth: number = slider.offsetWidth;
    let f = this.videoToPreview / 3;
    Number.isInteger(f) && (document.querySelector('.carousel-bottomt-slider').scrollLeft = f * sliderWidth);
  };

  ngOnDestroy() {
    this.sub1 && this.sub1.unsubscribe();
    this.sub2 && this.sub2.unsubscribe();
  }

  showPrevImage() {
    this.copiedSuccessfully = false;
    //Arrows accessibility section
    this.leftDisabled = this.videoToPreview - 2 < 0;
    this.rightDisabled = false;
    if (this.videoToPreview == 0)
      return;

    //Showing previous image
    this.videoToPreview--;

    //Moving slider in the bottom slider section
    const slider: HTMLElement = document.querySelector('.carousel-bottomt-slider');
    let sliderWidth: number = slider.offsetWidth;
    let f: number = (this.videoToPreview + 1) / 3;
    Number.isInteger(f) ? (document.querySelector('.carousel-bottomt-slider').scrollLeft = f * sliderWidth - sliderWidth) :
      (document.querySelector('.carousel-bottomt-slider').scrollLeft = Math.floor(f) * sliderWidth);
  };
}
