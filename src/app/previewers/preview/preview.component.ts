import { VideosService } from './../../services/videos/videos.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ImagesService } from '../../services/images/images.service';
import { Router } from '@angular/router';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-image-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})


export class ImagePreviewComponent implements OnInit, OnDestroy {
    images: Array<object>;
    videos: Array<object>;
    section: string = 'images';
    sortedSections: any = [];
    sub1: Subscription;
    sub2: Subscription;
    sub3: Subscription;
    sub4: Subscription;
    sections: string[] | string[][] = [];
    newSections: {};

    constructor(private imageService: ImagesService,
        private router: Router,
        private videoService: VideosService) {
    }

    changeSection() {
        this.section = this.section === 'images' ? 'videos' : 'images';
        this.sub1 = this.section === 'images' ?
            this.imageService.getImagesBySection('people', 3, 1).subscribe((data: any) => this.images = data.photos) : this.videoService.getVideo('people', 3, 1).subscribe((data: any) => this.images = data.videos);
    };

    ngOnInit() {
        this.sub2 = this.imageService.getSections().subscribe((sections: any) => {
            this.sections = sections;
            this.splitSections();
        });
        this.sub3 = this.imageService.getImagesBySection('people', 15, 1).subscribe((data: any) => this.images = data.photos);
    };

    ngOnDestroy() {
        this.sub1 && this.sub1.unsubscribe();
        this.sub2 && this.sub2.unsubscribe();
        this.sub3 && this.sub3.unsubscribe();
        this.sub4 && this.sub4.unsubscribe();
    };

    splitSections() {
        let chunk = 4;
        for (let i = 0, j = this.sections.length; i < j; i += chunk) {
            this.sortedSections.push(this.sections.slice(i, i + chunk));
        }
        let lastArray = this.sortedSections[this.sortedSections.length - 1];
        lastArray.length < 4 && (lastArray.length = 4);
        this.sections = this.sortedSections;
    };

    onSectionChange(chosenSection) {
        if (chosenSection == '')
            return;
        this.sub4 = this.section === 'images' ?
            this.imageService.getImagesBySection(chosenSection, 15, 1).subscribe((data: any) => { this.images = data.photos }) :
            this.videoService.getVideo(chosenSection, 15, 1).subscribe((data: any) => { this.images = data.videos });
    };
};
