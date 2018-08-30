import { HotelRoomReserveModule } from './hotel-room-reserve.module';

describe('HotelRoomReserveModule', () => {
  let hotelRoomReserveModule: HotelRoomReserveModule;

  beforeEach(() => {
    hotelRoomReserveModule = new HotelRoomReserveModule();
  });

  it('should create an instance', () => {
    expect(hotelRoomReserveModule).toBeTruthy();
  });
});
