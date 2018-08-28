import { Hotel } from './hotel';
import { City } from './city';

describe('Hotel', () => {

  it('should give default rating if input is not integer between 0 and 5', () => {
    let hotel = new Hotel('', '', City.nullCity(), -1, {avgRating: 0, reviewsNumber: 0}, '', [], [], [], '');
    expect(hotel.rating).toEqual('0');

    hotel = new Hotel('', '', City.nullCity(), 6, {avgRating: 0, reviewsNumber: 0}, '', [], [], [], '');
    expect(hotel.rating).toEqual('0');

    hotel = new Hotel('', '', City.nullCity(), 3.3, {avgRating: 0, reviewsNumber: 0}, '', [], [], [], '');
    expect(hotel.rating).toEqual('0');
  });

});
