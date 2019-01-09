import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-preview-samples',
    templateUrl: './preview-samples.component.html',
    styleUrls: ['./preview-samples.component.css']
})
export class PreviewSamplesComponent implements OnChanges {
    @Input() images: Array<object>;
    @Input() section: string;
    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        changes.images && (this.images = changes.images.currentValue);
        changes.section && (this.section = changes.section.currentValue);
    }
}
