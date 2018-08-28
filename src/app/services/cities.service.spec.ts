import { TestBed, inject } from '@angular/core/testing';
import { City } from '../data classes/city';
import { CitiesService } from './cities.service';

const cities = [
  new City('Vilnius', 'assets/flags/lt-flag.png', 'assets/cities/Vilnius.jpg'),
  new City('London', 'assets/flags/gb-flag.png', 'assets/cities/London.jpg'),
  new City('Paris', 'assets/flags/fr-flag.png', 'assets/cities/Paris.jpg'),
  new City('Berlin', 'assets/flags/de-flag.png', 'assets/cities/Berlin.jpg')
];

describe('CitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitiesService]
    });
  });

  it('should be created', inject([CitiesService], (service: CitiesService) => {
    expect(service).toBeTruthy();
  }));

  it('should give all city objects ', inject([CitiesService], (service: CitiesService) => {
    expect(service.getAllCities()).toEqual(cities);
  }));

  it('should give any one city object by name if there is one', inject([CitiesService], (service: CitiesService) => {
    expect(service.getCity('Vilnius')).toEqual(cities[0]);
  }));

  it('should give null city if cant find city by name or name is null', inject([CitiesService], (service: CitiesService) => {
    expect(service.getCity('abc')).toEqual(new City('', '', ''));
    expect(service.getCity(null)).toEqual(new City('', '', ''));
  }));
});
