import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFormThirdStepComponent } from './reserve-form-third-step.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ReserveFormThirdStepComponent', () => {
  let component: ReserveFormThirdStepComponent;
  let fixture: ComponentFixture<ReserveFormThirdStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveFormThirdStepComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(ReserveFormThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have date method that formats valid date string in same timezone', () => {
    expect(component.date('2018-09-01')).
      toEqual('2018-09-01');
    expect(component.date('2018-09-12')).
      toEqual('2018-09-12');
  });

  it('should have date method that returns empty string if it get invalid date string', () => {
    expect(component.date('sgfsjjdjyt')).
      toEqual('');
  });
});
