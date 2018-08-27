import { Room } from './room';

describe('Room', () => {

  it('should give room information', () => {
    const room = new Room('a', 4, 45.5);
    expect(room.roomName).toEqual('a');
    expect(room.sleeps).toEqual(4);
    expect(room.price).toEqual(45.5);
  });

  it('should return defaults if sleeps is not positive integer', () => {
    let room = new Room('a', 2.2, 45.5);
    expect(room.sleeps).toEqual(0);

    room = new Room('a', -1, 45.5);
    expect(room.sleeps).toEqual(0);
  });

  it('should return defaults if price is negative', () => {
    const room = new Room('a', 1, -45.5);
    expect(room.price).toEqual(0);
  });

});
