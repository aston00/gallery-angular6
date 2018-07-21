import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images/images.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private imageService: ImagesService) { }
  images;
  sortedSections: any = [];
  sections: any;
  newSections: {};

  ngOnInit() {
    this.sections = this.imageService.getCategories();
    // this.sections.forEach(section => {
    //   this.imageService.getImagesBySection(section).subscribe(
    //     (next) => this.images = next.photos;
    // });

    let chunk = 4;

    for (let i = 0, j = this.sections.length; i < j; i += chunk) {
      this.sortedSections.push(this.sections.slice(i, i + chunk));
    }

    let lastArray = this.sortedSections[this.sortedSections.length - 1];
    let difference = 0;
    let arraySort = [];
    if (lastArray.length < 4)
      lastArray.length = 4;

    this.sections = this.sortedSections;


  }
  



  onSectionChange(section) {
    if (section == '')
      return;

    this.imageService.getImagesBySection(section).subscribe((data: any) => {
    console.log(data);
      this.images = data.photos
    } );
  }

}
