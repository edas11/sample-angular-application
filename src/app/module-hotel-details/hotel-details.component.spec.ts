import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelDetailsComponent } from './hotel-details.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../activated-route-stub';
import { CitiesService } from '../services/cities.service';
import { HotelsData } from '../services/hotels-data';
import { Hotel } from '../data classes/hotel';

describe('HotelDetailsComponent', () => {
  let component: HotelDetailsComponent;
  let fixture: ComponentFixture<HotelDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelDetailsComponent],
      providers : [HotelsService, CitiesService,
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(HotelDetailsComponent);
    component = fixture.componentInstance;
    TestBed.get(ActivatedRoute).setParamMap({hotelName: 'Hotel Regina Louvre'});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get hotel', () => {
    const expectedHotel: Hotel = HotelsData.getHotelsData(TestBed.get(CitiesService))[6];
    expect(component.hotel).toEqual(expectedHotel);
  });

});
