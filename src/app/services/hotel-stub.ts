import { City } from '../city';
import { Hotel } from '../hotel';

export class HotelStub {

    private _hotelName: String = '';
    private _city: City;

    constructor(city: City) {
        this._city = city;
    }

    get hotelName(): String {
        return this._hotelName;
    }
    get hotelCity(): City {
        return this._city;
    }

}
