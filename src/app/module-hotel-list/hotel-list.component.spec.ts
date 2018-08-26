import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HotelListComponent } from './hotel-list.component';
import { HotelsService } from '../services/hotels.service';
import { CitiesService } from '../services/cities.service';
import { ActivatedRouteStub } from '../activated-route-stub';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelsData } from '../services/hotels-data';

describe('HotelListComponent', () => {
  let component: HotelListComponent;
  let fixture: ComponentFixture<HotelListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HotelsService, CitiesService,
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ],
      declarations: [ HotelListComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(HotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.get(ActivatedRoute).setParamMap({cityName: 'Berlin'});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make an observable with hotels in a city', () => {
    const expectedHotels: Hotel[] = HotelsData.getHotelsData(TestBed.get(CitiesService)).slice(8, 10);
    component.hotels$.subscribe( (hotels: Hotel[]) => {
      expect(hotels).toEqual(expectedHotels);
    });
  });
});
