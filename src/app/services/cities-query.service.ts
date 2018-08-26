import { Injectable } from '@angular/core';
import { CityQueryResult } from '../city-query-result';
import { CitiesService } from './cities.service';
import { HotelsService } from './hotels.service';
import { City } from '../city';
import { Hotel } from '../hotel';

@Injectable({
  providedIn: 'root'
})
export class CitiesQueryService {

  cities: CityQueryResult[];

  constructor(private citiesService: CitiesService, private hotelsService: HotelsService) {
  }

  public queryCities(): CityQueryResult[] {
    const cities: City[] = this.citiesService.getAllCities();
    return cities.map( (city: City) => {
      const hotels: Hotel[] = this.hotelsService.getHotelsByCity(city);
      return new CityQueryResult(city, hotels.length + ' hotels in a city');
    });
  }
}
