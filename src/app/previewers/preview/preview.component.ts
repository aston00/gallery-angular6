import { VideosService } from './../../services/videos/videos.service';
import { Component, OnInit, Input } from '@angular/core';
import { ImagesService } from '../../services/images/images.service';
import { Router } from '@angular/router';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


@Component({
    selector: 'app-image-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})


export class ImagePreviewComponent implements OnInit {
    images: Array<object>;
    videos: Array<object>;
    section: string = 'images';
    sortedSections: any = [];
    sections: string[] | string[][] = [];
    newSections: {};

    constructor(private imageService: ImagesService,
            private router: Router,
        private videoService: VideosService) {
    }

    changeSection(){
        this.section = this.section === 'images' ? 'videos' : 'images'; 
        console.log(this.section);
        if(this.section === 'images'){
            this.imageService.getImagesBySection('people', 15, 1).subscribe((data: any) => this.images = data.photos);
        } else {
            this.videoService.getVideo('people', 15, 1).subscribe((data: any) => {console.log(data); this.images = data.videos });
        }
      }
    ngOnInit() {
        this.imageService.getSections().subscribe((sections: any) => {
            this.sections = sections;
            this.splitSections();
        });

       
            this.imageService.getImagesBySection('people', 15, 1).subscribe((data: any) => this.images = data.photos);
       
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

    onSectionChange(chosenSection) {
        if (chosenSection == '')
            return;
        if(this.section === 'images'){
            this.imageService.getImagesBySection(chosenSection, 15, 1).subscribe((data: any) => {
                this.images = data.photos
            });
        } else {
            this.videoService.getVideo(chosenSection, 15, 1).subscribe((data: any) => {
                console.log(data); this.images = data.videos 
            });
        }
    };

}
