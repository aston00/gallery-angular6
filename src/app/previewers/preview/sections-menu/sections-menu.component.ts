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

    ngOnChanges(changes: SimpleChanges): void {
        changes.sections && changes.sections.currentValue && (this.sections = changes.sections.currentValue);
    }

    getImagesBySection(section: string) {
        this.getImages.emit(section);
    }

    showNextSections(): void {
        const element: HTMLElement = document.querySelector('.gallery-sidemenu-link-list');
        let height: number = element.offsetHeight;
        // let scrollHeight = eleme.scrollHeight;
        element.scrollTop += height;
        this.topDisabled = false;
        this.bottomDisabled = this.currentSection == this.sections.length - 2;
        this.currentSection++;
    }

    showPrevSections(): void {
        const linkElement: HTMLElement = document.querySelector('.gallery-sidemenu-link-list');
        let elementHeight: number = linkElement.offsetHeight;
        let scrollDistance: number = linkElement.scrollTop;
        this.topDisabled = this.currentSection <= 1;
        linkElement.scrollTop = scrollDistance - elementHeight;
        this.bottomDisabled = false;
        this.currentSection--;
    }
}
