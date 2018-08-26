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

  constructor(cs: CitiesService) { 
    this._hotels = HotelsData.getHotelsData(cs);
  }

  getHotel(name: string): Hotel {
    const hotelResult = this._hotels.find( (hotel: Hotel) => hotel.hotelName === name );
    if (hotelResult) {
      return hotelResult;
    } else {
      return new Hotel('', '', null, 0, [0, 0], '', [''], [''], [null]);
    }
  }
  getHotelsByCity(city: City): Hotel[] {
    return this._hotels.filter( (hotel: Hotel) => hotel.city === city );
  }
}
