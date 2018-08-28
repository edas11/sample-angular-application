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

    public isCheaperThan(room: Room): boolean {
        return parseFloat(this._price.toFixed(2)) < parseFloat(room._price.toFixed(2));
    }
    public isMoreExpensiveThan(room: Room): boolean {
        return parseFloat(this._price.toFixed(2)) > parseFloat(room._price.toFixed(2));
    }
    public isSamePriceAs(room: Room): boolean {
        return parseFloat(this._price.toFixed(2)) === parseFloat(room._price.toFixed(2));
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

}
