import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomReserveComponent } from './hotel-room-reserve.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRouteStub } from '../activated-route-stub';
import { ActivatedRoute, Router } from '@angular/router';

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
      ]
    });

    fixture = TestBed.createComponent(HotelRoomReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
