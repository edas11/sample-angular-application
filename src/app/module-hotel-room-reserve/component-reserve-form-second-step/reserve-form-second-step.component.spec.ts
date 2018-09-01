import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFormSecondStepComponent } from './reserve-form-second-step.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ReserveFormSecondStepComponent', () => {
  let component: ReserveFormSecondStepComponent;
  let fixture: ComponentFixture<ReserveFormSecondStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveFormSecondStepComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(ReserveFormSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
