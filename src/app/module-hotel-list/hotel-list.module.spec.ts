import { HotelListModule } from './hotel-list.module';

describe('HotelListModule', () => {
  let hotelListModule: HotelListModule;

  beforeEach(() => {
    hotelListModule = new HotelListModule();
  });

  it('should create an instance', () => {
    expect(hotelListModule).toBeTruthy();
  });
});
