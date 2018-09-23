import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsHandlingComponent } from './errors-handling.component';

describe('ErrorsHandlingComponent', () => {
  let component: ErrorsHandlingComponent;
  let fixture: ComponentFixture<ErrorsHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorsHandlingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
