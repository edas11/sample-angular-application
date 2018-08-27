import { City } from '../data classes/city';
import { Hotel } from '../data classes/hotel';
import { Room } from '../data classes/room';

export class HotelStubFactory {

    constructor() {
    }
    static createHotelIn(city: City): Hotel {
        return new Hotel('', '', city, 0, {avgRating: 0, reviewsNumber: 0}, '', [''], [''], [null], '');
    }

}
