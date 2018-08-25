import { Injectable } from '@angular/core';
import { CityQueryResult } from '../city-query-result';
import { CitiesService } from './cities.service';
import { HotelsQueryService } from './hotels-query.service';
import { City } from '../city';
import { Hotel } from '../hotel';

@Injectable({
  providedIn: 'root'
})
export class CitiesQueryService {

  cities: CityQueryResult[];

  constructor(private citiesService: CitiesService, private hotelsQueryService: HotelsQueryService) {
  }

  public queryCities(): CityQueryResult[] {
    const cities: City[] = this.citiesService.getAllCities();
    return cities.map( (city: City) => {
      const hotels: Hotel[] = this.hotelsQueryService.getHotelsByCity(city);
      return new CityQueryResult(city, hotels.length + ' hotels in a city');
    });
  }
}
