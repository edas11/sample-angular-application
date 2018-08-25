import { Injectable } from '@angular/core';
import { City } from '../city';
import { Hotel } from '../hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsQueryService {

  constructor() { }

  getHotelsByCity(city: City): Hotel[] {
    return null;
  }
}
