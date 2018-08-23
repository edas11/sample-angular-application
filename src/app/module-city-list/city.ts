export class City {
    private _cityName: String;
    private _cityMeta: String;
    private _flagSrc: String;
    private _imgSrc: String;

    constructor(cityName: String, cityMeta: String, flagSrc: String, imgSrc: String) {
        this._cityName = cityName;
        this._cityMeta = cityMeta;
        this._flagSrc = flagSrc;
        this._imgSrc = imgSrc;
    }

    get cityName(): String {
        return this._cityName;
    }
    get cityMeta(): String {
        return this._cityMeta;
    }
    get flagSrc(): String {
        return this._flagSrc;
    }
    get imgSrc(): String {
        return this._imgSrc;
    }
}
