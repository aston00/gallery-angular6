import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images/images.service';


@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})


export class PreviewComponent implements OnInit {

    images: Array<object>;
    sortedSections: any = [];
    sections: string[] | string[][] = [];
    newSections: {};

    constructor(private imageService: ImagesService) {
    }

    ngOnInit() {
        this.imageService.getSections().subscribe((data: any) => {
            this.sections = data.sections;
            this.splitSections();
        })
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

    onSectionChange(section) {
        if (section == '')
            return;

        this.imageService.getImagesBySection(section, 15, 1).subscribe((data: any) => {
            this.images = data.photos
        });
    };

}
