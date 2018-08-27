import { TestBed, inject } from '@angular/core/testing';
import { CitiesQueryService } from './cities-query.service';
import { CitiesService } from './cities.service';
import { HotelsService } from './hotels.service';
import { City } from '../data classes/city';
import { Hotel } from '../data classes/hotel';
import { HotelStubFactory } from './hotel-stub-factory';
import { CityQueryResult } from '../data classes/city-query-result';

describe('CitiesQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CitiesQueryService,
        CitiesService,
        HotelsService
      ]
    });
  });

  it('should be created', inject([CitiesQueryService], (service: CitiesQueryService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all cities with meta info', inject([CitiesQueryService], (service: CitiesQueryService) => {
    const cities = TestBed.get(CitiesService).getAllCities();
    const expected: CityQueryResult[] = [
      new CityQueryResult(cities[0], '2 hotels in a city'),
      new CityQueryResult(cities[1], '3 hotels in a city'),
      new CityQueryResult(cities[2], '3 hotels in a city'),
      new CityQueryResult(cities[3], '2 hotels in a city')
    ];
    expect(service.queryCities()).toEqual(expected);
  }));
});
