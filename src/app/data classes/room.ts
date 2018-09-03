import {validateSync , IsInt, Min, Max} from 'class-validator';
import * as moment from 'moment';

export class Room {

    private _roomName: String;
    private _roomImgSrc: String;

    @IsInt()
    @Min(0)
    private _id: Number;

    @IsInt()
    @Min(0)
    private _sleeps: Number;

    @Min(0)
    private _price: number;

    constructor(id: Number, roomName: String, sleeps: Number, price: number, roomImgSrc: String) {
        this._id = id;
        this._roomName = roomName;
        this._sleeps = sleeps;
        this._price = price;
        this._roomImgSrc = roomImgSrc;

        validateSync(this).forEach( (error) => {
            this[error.property.toString()] = 0;
        });
    }

    static nullRoom(): Room {
        return new Room(0, '', 0, 0, '');
    }

    public isCheaperThan(room: Room): boolean {
        return parseFloat(this._price.toFixed(2)) < parseFloat(room._price.toFixed(2));
    }
    public isMoreExpensiveThan(room: Room): boolean {
        return parseFloat(this._price.toFixed(2)) > parseFloat(room._price.toFixed(2));
    }
    public isSamePriceAs(room: Room): boolean {
        return parseFloat(this._price.toFixed(2)) === parseFloat(room._price.toFixed(2));
    }
/*
    calcReservationPrice(checkInDatestr: string, checkOutDateStr: string): string {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const checkInParsed = Date.parse(checkInDatestr);
        const checkOutParsed = Date.parse(checkOutDateStr); 
        if (checkInParsed && checkOutParsed && checkOutParsed >= checkInParsed) {
          const checkInDate = new Date(checkInParsed);
          const checkOutDate = new Date(checkOutParsed);
          const utc1 = Date.UTC(checkInDate.getFullYear(), checkInDate.getMonth(), checkInDate.getDate());
          const utc2 = Date.UTC(checkOutDate.getFullYear(), checkOutDate.getMonth(), checkOutDate.getDate());
          const price = Math.floor((utc2 - utc1) / _MS_PER_DAY) * this._price;
          return price.toFixed(2);
        } else {
          return '';
        }
    }
*/
    calcReservationPrice(checkInDatestr: string, checkOutDateStr: string): string {
        const checkIn = moment(checkInDatestr).local();
        const checkOut = moment(checkOutDateStr).local(); 
        if (checkIn.isValid() && checkOut.isValid() && checkOut.isAfter(checkIn)) {
            const dayDiff = checkOut.diff(checkIn, 'days');
            const price = dayDiff * this._price;
            return price.toFixed(2);
        } else {
            return '';
        }
    }

    public get id(): String {
        return this._id.toFixed(0);
    }
    public get roomName(): String {
        return this._roomName;
    }
    public get sleeps(): String {
        return this._sleeps.toFixed(0);
    }
    public get price(): String {
        return this._price.toFixed(2);
    }
    public get roomImgSrc(): String {
        return this._roomImgSrc;
    }

    sleepsNumberArray(): Number[] {
        if (this._sleeps > 2) {
            return new Array(2);
        } else {
            return new Array(this._sleeps);
        }
    }

}
