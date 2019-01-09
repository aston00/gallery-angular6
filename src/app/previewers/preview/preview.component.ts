import { VideosService } from './../../services/videos/videos.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ImagesService } from '../../services/images/images.service';
import { Router } from '@angular/router';
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
    newSections: object;

    constructor(private imageService: ImagesService, private videoService: VideosService) { }

    ngOnInit(): void {
        this.sub2 = this.imageService.getSections().subscribe((sections: string[] | string[][]): void => {
            this.sections = sections;
            this.splitSections();
        });
        this.sub3 = this.imageService.getImagesBySection('people', 3, 1).subscribe((data: object): void => this.images = data['photos']);
    }

    ngOnDestroy(): void {
        this.sub1 && this.sub1.unsubscribe();
        this.sub2 && this.sub2.unsubscribe();
        this.sub3 && this.sub3.unsubscribe();
        this.sub4 && this.sub4.unsubscribe();
    }

    changeSection(): void {
        this.section = this.section === 'images' ? 'videos' : 'images';
        this.sub1 = this.section === 'images' ?
            this.imageService.getImagesBySection('people', 3, 1).subscribe((data: object) => this.images = data['photos']) :
            this.videoService.getVideo('people', 3, 1).subscribe((data: object): void => this.images = data['videos']);
    }

    splitSections(): void {
        let chunk: number = 4;
        for (let i: number = 0, j: number = this.sections.length; i < j; i += chunk) {
            this.sortedSections.push(this.sections.slice(i, i + chunk));
        }
        let lastArray: string[] | string[][] = this.sortedSections[this.sortedSections.length - 1];
        lastArray.length < 4 && (lastArray.length = 4);
        this.sections = this.sortedSections;
    }

    onSectionChange(chosenSection: string): void {
        if (chosenSection == '')
            return;
        this.sub4 = this.section === 'images' ?
            this.imageService.getImagesBySection(chosenSection, 3, 1).subscribe((data: object): void => this.images = data['photos']) :
            this.videoService.getVideo(chosenSection, 3, 1).subscribe((data: object): void => this.images = data['videos']);
    }
}
