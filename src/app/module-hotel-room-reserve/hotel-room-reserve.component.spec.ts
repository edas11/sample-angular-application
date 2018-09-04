import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomReserveComponent } from './hotel-room-reserve.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRouteStub } from '../activated-route-stub';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HotelRoomReserveComponent', () => {
  let component: HotelRoomReserveComponent;
  let fixture: ComponentFixture<HotelRoomReserveComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelRoomReserveComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        { provide: Router,      useValue: routerSpy }
      ],
      imports: [ BrowserAnimationsModule ]
    });

    fixture = TestBed.createComponent(HotelRoomReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if checkIn is before check Out', () => {
    expect(component.isCheckOutBeforeOrSame('2018-09-02', '2018-09-03')).toBeFalsy();
    expect(component.isCheckOutBeforeOrSame('2018-09-02', '2018-09-02')).toBeTruthy();
    // time shouldnt matter
    expect(component.isCheckOutBeforeOrSame('2018-09-02 09:00', '2018-09-02 10:00')).toBeTruthy();
    expect(component.isCheckOutBeforeOrSame('2018-09-02 10:00', '2018-09-02 09:00')).toBeTruthy();
    expect(component.isCheckOutBeforeOrSame('2018-09-02', '2018-09-01')).toBeTruthy();
    expect(component.isCheckOutBeforeOrSame('20djdgfj-02', '201djt01')).toBeTruthy();
  });

});
