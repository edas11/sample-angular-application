import { City } from './city';
import { Room } from './room';
import { UserReviewsInput } from './user-reviews-input';
import { UserReviews } from './user-reviews';
import {validateSync , IsInt, Min, Max} from 'class-validator';

export class Hotel {

    private _hotelName: String;
    private _street: String;
    private _city: City;
    private _userReviews: UserReviews;
    private _description: String;
    private _facilities: String[];
    private _activities: String[];
    private _rooms: Room[];
    private _imgSrc: String;
    private _imgBigSrc: String;

    @IsInt()
    @Min(0)
    @Max(5)
    private _rating: Number;

    constructor(hotelName: String, street: String, city: City, rating: Number,
        userReviews: UserReviewsInput, description: String, facilities: String[],
        activities: String[], rooms: Room[], imgSrc: String, imgBigSrc: String) {
        this._hotelName = hotelName;
        this._street = street;
        this._city = city;
        this._rating = rating;
        this._userReviews = new UserReviews(userReviews);
        this._description = description;
        this._facilities = facilities;
        this._activities = activities;
        this._rooms = rooms;
        this._imgSrc = imgSrc;
        this._imgBigSrc = imgBigSrc;

        validateSync(this).forEach( (error) => {
            this[error.property.toString()] = 0;
        });
    }

    static nullHotel(): Hotel {
        return new Hotel('', '', City.nullCity(), 0, {avgRating: 0, reviewsNumber: 0}, '', [], [], [], '', '');
    }

    getRoom(idStr: string): Room | null {
        const roomWithId = this._rooms.find( (room: Room) => {
            return room.id === idStr;
        });
        if (roomWithId) {
            return roomWithId;
        } else {
            return null;
        }
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
    public get rating(): String {
        return this._rating.toFixed(0);
    }
    public get userReviews(): UserReviews {
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
    public get imgBigSrc(): String {
        return this._imgBigSrc;
    }

}
