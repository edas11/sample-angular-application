import { City } from './city';

export class Hotel {

    private _hotelName: String;
    private _city: City;

    constructor(hotelName: String, city: City) {
        this._hotelName = hotelName;
        this._city = city;
    }

    get hotelName(): String {
        return this._hotelName;
    }
    get hotelCity(): City {
        return this._city;
    }

}
