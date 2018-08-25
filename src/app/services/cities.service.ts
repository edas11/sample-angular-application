import { Injectable } from '@angular/core';
import { City } from '../city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  cities: City[];

  constructor() { 
    this.cities = [
      new City('Vilnius', 'assets/flags/lt-flag.png', 'assets/cities/Vilnius.jpg'),
      new City('London', 'assets/flags/gb-flag.png', 'assets/cities/London.jpg'),
      new City('Paris', 'assets/flags/fr-flag.png', 'assets/cities/Paris.jpg'),
      new City('Berlin', 'assets/flags/de-flag.png', 'assets/cities/Berlin.jpg')
    ];
  }

  getAllCities(): City[] {
    return this.cities;
  }

  getCity(cityName: String): City {
    const cityResultArray: City[] = this.cities.filter( (city: City) => city.cityName === cityName);
    if (cityResultArray[0]) {
      return cityResultArray[0];
    } else {
      return new City('', '', '');
    }
  }
}
