import { City } from './city';

export class CityQueryResult {
    private _city: City;
    private _cityMeta: String;

    constructor(city: City, cityMeta: String) {
        this._city = city;
        this._cityMeta = cityMeta;
    }

    get city(): City {
        return this._city;
    }
    get cityMeta(): String {
        return this._cityMeta;
    }
}
