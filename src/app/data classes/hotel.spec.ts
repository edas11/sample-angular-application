import { Hotel } from './hotel';

describe('Hotel', () => {

  it('should give default rating if input is not integer between 0 and 5', () => {
    let hotel = new Hotel('', '', null, -1, null, '', null, null, null, '');
    expect(hotel.rating).toEqual(0);

    hotel = new Hotel('', '', null, 6, null, '', null, null, null, '');
    expect(hotel.rating).toEqual(0);

    hotel = new Hotel('', '', null, 3.3, null, '', null, null, null, '');
    expect(hotel.rating).toEqual(0);
  });

});
