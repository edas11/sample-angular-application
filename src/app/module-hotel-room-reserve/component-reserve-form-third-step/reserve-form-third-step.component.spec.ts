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
    expect(component.date('Sat Sep 01 2018 11:19:43 GMT+0300 (Eastern European Summer Time)')).
      toEqual('2018-09-01');
    expect(component.date('Wed Sep 12 2018 00:00:00 GMT+0300 (Eastern European Summer Time)')).
      toEqual('2018-09-12');
    expect(component.date('Wed Sep 12 2018 23:59:59 GMT+0300 (Eastern European Summer Time)')).
      toEqual('2018-09-12');
  });

  it('should have date method that returns empty string if it get invalid date string', () => {
    expect(component.date('sgfsjjdjyt')).
      toEqual('');
  });
});
