import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsMenuComponent } from './sections-menu.component';

describe('SectionsMenuComponent', () => {
  let component: SectionsMenuComponent;
  let fixture: ComponentFixture<SectionsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
