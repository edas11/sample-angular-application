import { City } from './city';
import { Room } from './room';

export class Hotel {

    private _hotelName: String;
    private _street: String;
    private _city: City;
    private _rating: Number;
    private _userReviews: [Number, Number];
    private _description: String;
    private _facilities: String[];
    private _activities: String[];
    private _rooms: Room[];
    private _imgSrc: String;

    constructor(hotelName: String, street: String, city: City, rating: Number,
        userReviews: [Number, Number], description: String, facilities: String[],
        activities: String[], rooms: Room[], imgSrc: String) {
        this._hotelName = hotelName;
        this._street = street;
        this._city = city;
        this._rating = rating;
        this._userReviews = userReviews;
        this._description = description;
        this._facilities = facilities;
        this._activities = activities;
        this._rooms = rooms;
        this._imgSrc = imgSrc;
    }

    public get hotelName(): String {
        return this._hotelName;
    }
    public get street(): String {
        return this._street;
    }
    public get city(): City {
        return this._city;
    }
    public get rating(): Number {
        return this._rating;
    }
    public get userReviews(): [Number, Number] {
        return this._userReviews;
    }
    public get description(): String {
        return this._description;
    }
    public get facilities(): String[] {
        return this._facilities;
    }
    public get activities(): String[] {
        return this._activities;
    }
    public get rooms(): Room[] {
        return this._rooms;
    }
    public get imgSrc(): String {
        return this._imgSrc;
    }

}
