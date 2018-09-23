import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewersComponent } from './previewers.component';

describe('PreviewersComponent', () => {
  let component: PreviewersComponent;
  let fixture: ComponentFixture<PreviewersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
