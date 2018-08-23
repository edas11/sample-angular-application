import { Injectable } from '@angular/core';
import { City } from './module-city-list/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesDataSourceService {

  cities: City[];

  constructor() {
    this.cities = [
      new City('Vilnius', '2 hotels in total', 'assets/flags/lt-flag.png', 'assets/cities/Vilnius.jpg'),
      new City('London', '3 hotels in total', 'assets/flags/gb-flag.png', 'assets/cities/London.jpg'),
      new City('Paris', '3 hotels in total', 'assets/flags/fr-flag.png', 'assets/cities/Paris.jpg'),
      new City('Berlin', '2 hotels in total', 'assets/flags/de-flag.png', 'assets/cities/Berlin.jpg')
    ];
   }

  public getCities(): City[] {
    return this.cities;
  }
}
