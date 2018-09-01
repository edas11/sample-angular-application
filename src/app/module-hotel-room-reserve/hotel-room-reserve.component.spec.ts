import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomReserveComponent } from './hotel-room-reserve.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HotelRoomReserveComponent', () => {
  let component: HotelRoomReserveComponent;
  let fixture: ComponentFixture<HotelRoomReserveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelRoomReserveComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(HotelRoomReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
