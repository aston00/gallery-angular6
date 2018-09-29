import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sections-menu',
    templateUrl: './sections-menu.component.html',
    styleUrls: ['./sections-menu.component.css']
})
export class SectionsMenuComponent implements OnChanges {

    @Input() sections: Array<string>;
    @Output() getImages = new EventEmitter();
    @Input() sectionsType: string;

    currentSection: number = 0;
    topDisabled: boolean = true;
    bottomDisabled: boolean = false;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        changes.sections && changes.sections.currentValue && (this.sections = changes.sections.currentValue);
    }

    getImagesBySection(section) {
        this.getImages.emit(section);
    }

    showNextSections() {
        const eleme: HTMLElement = document.querySelector('.gallery-sidemenu-link-list');
        let height = eleme.offsetHeight;
        let scrollHeight = eleme.scrollHeight;
        eleme.scrollTop += height;
        this.topDisabled = false;
        this.bottomDisabled = this.currentSection == this.sections.length - 2;
        this.currentSection++;
    }

    showPrevSections() {
        this.topDisabled = this.currentSection <= 1;
        const eleme: HTMLElement = document.querySelector('.gallery-sidemenu-link-list');
        let height = eleme.offsetHeight;
        let now = eleme.scrollTop;
        eleme.scrollTop = now - height;
        this.bottomDisabled = false;
        this.currentSection--;
    }
}
