import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFormFirstStepComponent } from './reserve-form-first-step.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ReserveFormFirstStepComponent', () => {
  let component: ReserveFormFirstStepComponent;
  let fixture: ComponentFixture<ReserveFormFirstStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveFormFirstStepComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(ReserveFormFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
