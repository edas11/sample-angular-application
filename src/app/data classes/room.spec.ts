import { Room } from './room';

describe('Room', () => {

  it('should give room information', () => {
    const room = new Room('a', 4, 45.5);
    expect(room.roomName).toEqual('a');
    expect(room.sleeps).toEqual('4');
    expect(room.price).toEqual('45.50');
  });

  it('should return defaults if sleeps is not positive integer', () => {
    let room = new Room('a', 2.2, 45.5);
    expect(room.sleeps).toEqual('0');

    room = new Room('a', -1, 45.5);
    expect(room.sleeps).toEqual('0');
  });

  it('should return defaults if price is negative', () => {
    const room = new Room('a', 1, -45.5);
    expect(room.price).toEqual('0.00');
  });

  it('should determine if room is cheaper than some other room', () => {
    const room = new Room('a', 1, 45.5);
    const room1 = new Room('a', 1, 45.5);
    const room2 = new Room('a', 1, 50);
    const room3 = new Room('a', 1, 30);

    expect(room.isCheaperThan(room1)).toBeFalsy();
    expect(room.isCheaperThan(room2)).toBeTruthy();
    expect(room.isCheaperThan(room3)).toBeFalsy();
  });

  it('should determine if room is more expensive than some other room', () => {
    const room = new Room('a', 1, 45.5);
    const room1 = new Room('a', 1, 45.5);
    const room2 = new Room('a', 1, 50);
    const room3 = new Room('a', 1, 30);

    expect(room.isMoreExpensiveThan(room1)).toBeFalsy();
    expect(room.isMoreExpensiveThan(room2)).toBeFalsy();
    expect(room.isMoreExpensiveThan(room3)).toBeTruthy();
  });

  it('should determine if room has same price as some other room', () => {
    const room = new Room('a', 1, 45.5);
    const room1 = new Room('a', 1, 45.5);
    const room2 = new Room('a', 1, 50);
    const room3 = new Room('a', 1, 30);

    expect(room.isSamePriceAs(room1)).toBeTruthy();
    expect(room.isSamePriceAs(room2)).toBeFalsy();
    expect(room.isSamePriceAs(room3)).toBeFalsy();
  });

});