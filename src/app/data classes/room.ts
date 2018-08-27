import {validateSync , IsInt, Min, Max} from 'class-validator';

export class Room {

    private _roomName: String;

    @IsInt()
    @Min(0)
    private _sleeps: Number;

    @Min(0)
    private _price: Number;

    constructor(roomName: String, sleeps: Number, price: Number) {
        this._roomName = roomName;
        this._sleeps = sleeps;
        this._price = price;

        validateSync(this).forEach( (error) => {
            this[error.property.toString()] = 0;
        });
     }

    public get roomName(): String {
        return this._roomName;
    }
    public get sleeps(): Number {
        return this._sleeps;
    }
    public get price(): Number {
        return this._price;
    }

}
