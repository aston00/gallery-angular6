import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-preview-samples',
    templateUrl: './preview-samples.component.html',
    styleUrls: ['./preview-samples.component.css']
})
export class PreviewSamplesComponent implements OnInit, OnChanges {
    @Input() images: Array<object>;
    @Input() section: string;
    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.images) {
            this.images = changes.images.currentValue;
        }

        if (changes.section) {
            this.section = changes.section.currentValue;
        }
    };

    ngOnInit() {
    };

}