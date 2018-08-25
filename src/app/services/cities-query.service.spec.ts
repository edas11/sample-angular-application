import { TestBed, inject } from '@angular/core/testing';
import { CitiesQueryService } from './cities-query.service';
import { CitiesService } from './cities.service';
import { HotelsQueryService } from './hotels-query.service';
import { City } from '../city';
import { Hotel } from '../hotel';
import { HotelStub } from './hotel-stub';
import { CityQueryResult } from '../city-query-result';

describe('CitiesDataSourceService', () => {
  const cities: City[] = [
    new City('Vilnius', 'assets/flags/lt-flag.png', 'assets/cities/Vilnius.jpg'),
    new City('London', 'assets/flags/gb-flag.png', 'assets/cities/London.jpg'),
  ];

  const citiesSpy: jasmine.SpyObj<CitiesService> =
    jasmine.createSpyObj('CitiesService', ['getAllCities']);
  citiesSpy.getAllCities.and.returnValue(cities);

  const hotelsQuerySpy: jasmine.SpyObj<HotelsQueryService> =
    jasmine.createSpyObj('HotelsQueryService', ['getHotelsByCity']);
  hotelsQuerySpy.getHotelsByCity.and.returnValues([
    new HotelStub(cities[0]),
    new HotelStub(cities[0])
  ], [
    new HotelStub(cities[1])
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CitiesQueryService,
        { provide: CitiesService, useValue: citiesSpy},
        { provide: HotelsQueryService, useValue: hotelsQuerySpy}
      ]
    });
  });

  it('should be created', inject([CitiesQueryService], (service: CitiesQueryService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all cities with meta info', inject([CitiesQueryService], (service: CitiesQueryService) => {
    const expected: CityQueryResult[] = [
      new CityQueryResult(cities[0], '2 hotels in a city'),
      new CityQueryResult(cities[1], '1 hotels in a city')
    ];
    expect(service.queryCities()).toEqual(expected);
  }));
});
