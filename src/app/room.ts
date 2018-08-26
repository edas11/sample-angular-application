export class Room {

    private _roomName: String;
    private _sleeps: Number;
    private _price: Number;

    constructor() { }

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
