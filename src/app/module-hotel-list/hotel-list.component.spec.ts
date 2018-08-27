import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HotelListComponent } from './hotel-list.component';
import { HotelsService } from '../services/hotels.service';
import { CitiesService } from '../services/cities.service';
import { ActivatedRouteStub } from '../activated-route-stub';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Hotel } from '../data classes/hotel';
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

  it('should have method that returns lowest room price', () => {
    const hotels: Hotel[] = HotelsData.getHotelsData(TestBed.get(CitiesService));
    expect(component.getMinRoomPrice(hotels[0])).toEqual(0);
  });

  it('should have method that returns highest room price if it isnt min price', () => {
    const hotels: Hotel[] = HotelsData.getHotelsData(TestBed.get(CitiesService));
    expect(component.getMaxNotMinRoomPrice(hotels[0])).toEqual(1);
  });

  it('highest room price returns null if max price equals min price', () => {
    const hotels: Hotel[] = HotelsData.getHotelsData(TestBed.get(CitiesService));
    expect(component.getMaxNotMinRoomPrice(hotels[1])).toEqual(null);

    console.log(hotels[1]);
  });

});
