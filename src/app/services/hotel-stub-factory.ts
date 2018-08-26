import { City } from '../city';
import { Hotel } from '../hotel';
import { Room } from '../room';

export class HotelStubFactory {

    constructor() {
    }
    static createHotelIn(city: City): Hotel {
        return new Hotel('', '', city, 0, [0, 0], '', [''], [''], [null], '');
    }

}
