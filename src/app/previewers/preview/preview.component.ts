import { VideosService } from './../../services/videos/videos.service';
import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images/images.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-image-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})


export class ImagePreviewComponent implements OnInit {

    images: Array<object>;
    videos: Array<object>;
    sortedSections: any = [];
    sections: string[] | string[][] = [];
    newSections: {};

    constructor(private imageService: ImagesService,
            private router: Router,
        private videoService: VideosService) {
    }

    ngOnInit() {
        if(this.router.url.indexOf('image') !== -1){
            this.imageService.getSections().subscribe((sections: any) => {
                this.sections = sections;
                this.splitSections();
            });
            this.imageService.getImagesBySection('people', 15, 1).subscribe((data: any) => this.images = data.photos);
        } else {
            this.videoService.getVideo('people', 3, 1).subscribe((data: any) => { console.log(data); this.videos = data.videos });

        }
    };

    splitSections() {
        let chunk = 4;

        for (let i = 0, j = this.sections.length; i < j; i += chunk) {
            this.sortedSections.push(this.sections.slice(i, i + chunk));
        }

        let lastArray = this.sortedSections[this.sortedSections.length - 1];
        if (lastArray.length < 4)
            lastArray.length = 4;

        this.sections = this.sortedSections;
    }

    onSectionChange(section) {
        if (section == '')
            return;

        this.imageService.getImagesBySection(section, 15, 1).subscribe((data: any) => {
            this.images = data.photos
        });
    };

}
