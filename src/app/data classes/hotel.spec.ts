import { Hotel } from './hotel';
import { City } from './city';
import { Room } from './room';

describe('Hotel', () => {

  it('should give default rating if input is not integer between 0 and 5', () => {
    let hotel = new Hotel('', '', City.nullCity(), -1, {avgRating: 0, reviewsNumber: 0}, '', [], [], [], '', '');
    expect(hotel.rating).toEqual('0');

    hotel = new Hotel('', '', City.nullCity(), 6, {avgRating: 0, reviewsNumber: 0}, '', [], [], [], '', '');
    expect(hotel.rating).toEqual('0');

    hotel = new Hotel('', '', City.nullCity(), 3.3, {avgRating: 0, reviewsNumber: 0}, '', [], [], [], '', '');
    expect(hotel.rating).toEqual('0');
  });

  it('should give room by id or null if not found', () => {
    const rooms: Room[] = [new Room(5, '', 0, 0, ''), new Room(1, '', 0, 0, ''), new Room(3, '', 0, 0, '')];
    const hotel = new Hotel('', '', City.nullCity(), -1, {avgRating: 0, reviewsNumber: 0}, '', [], [], rooms, '', '');

    expect(hotel.getRoom('1')).toBe(rooms[1]);
    expect(hotel.getRoom('3')).toBe(rooms[2]);
    expect(hotel.getRoom('5')).toBe(rooms[0]);

    expect(hotel.getRoom('4')).toBe(null);
    expect(hotel.getRoom('-1')).toBe(null);
    expect(hotel.getRoom('1.2')).toBe(null);
  });

});
