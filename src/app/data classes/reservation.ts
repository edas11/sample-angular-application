import { Room } from './room';
import { Hotel } from './hotel';

export class Reservation {

    private _id: string;
    private _room: Room;
    private _hotel: Hotel;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _checkInDate: string;
    private _checkOutDate: string;
    private _totalPrice: string;

    constructor(id: string, room: Room, hotel: Hotel, firstName: string, lastName: string, 
        email: string, checkInDate: string, checkOutDate: string, totalPrice: string) {
            this._id = id;
            this._room = room;
            this._hotel = hotel;
            this._firstName = firstName;
            this._lastName = lastName;
            this._email = email;
            this._checkInDate = checkInDate;
            this._checkOutDate = checkOutDate;
            this._totalPrice = totalPrice;
    }

    public get id(): string {
        return this._id;
    }

    public get room(): Room {
        return this._room;
    }

    public get hotel(): Hotel {
        return this._hotel;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get email(): string {
        return this._email;
    }

    public get checkInDate(): string {
        return this._checkInDate;
    }

    public get checkOutDate(): string {
        return this._checkOutDate;
    }

    public get totalPrice(): string {
        return this._totalPrice;
    }
}
