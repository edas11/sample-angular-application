import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailsComponent } from './hotel-details.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HotelDetailsComponent', () => {
  let component: HotelDetailsComponent;
  let fixture: ComponentFixture<HotelDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDetailsComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(HotelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
