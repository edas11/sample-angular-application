import { Injectable } from '@angular/core';
import { City } from '../city';
import { Hotel } from '../hotel';
import { CitiesService } from './cities.service';
import { Room } from '../room';
import { HotelsData } from './hotels-data';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private _hotels: Hotel[];

  getHotel(name: string): Hotel {
    return null;
  }
  getHotelsByCity(city: City): Hotel[] {
    return null;
  }

  // tslint:disable:max-line-length
  constructor(cs: CitiesService) { 
    this._hotels = HotelsData.getHotelsData(cs);
   }
}
