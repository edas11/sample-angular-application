export class City {

    private _cityName: String;
    private _flagSrc: String;
    private _imgSrc: String;

    constructor(cityName: String, flagSrc: String, imgSrc: String) {
        this._cityName = cityName;
        this._flagSrc = flagSrc;
        this._imgSrc = imgSrc;
    }
    static nullCity(): City {
        return new City('', '', '');
    }

    get cityName(): String {
        return this._cityName;
    }
    get flagSrc(): String {
        return this._flagSrc;
    }
    get imgSrc(): String {
        return this._imgSrc;
    }

}
