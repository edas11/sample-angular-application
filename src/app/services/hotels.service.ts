import { Injectable } from '@angular/core';
import { City } from '../data classes/city';
import { Hotel } from '../data classes/hotel';
import { CitiesService } from './cities.service';
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
      return Hotel.nullHotel();
    }
  }

  getHotelsByCity(city: City): Hotel[] {
    return this._hotels.filter( (hotel: Hotel) => hotel.city === city );
  }

  getHotelWithRoom(roomId: string): Hotel | null {
    const hotelWithRoom = this._hotels.find( (hotel: Hotel) => {
      return hotel.getRoom(roomId) !== null;
    });
    if (hotelWithRoom) {
      return hotelWithRoom;
    } else {
      return null;
    }
  }
}
