import { HotelDetailsModule } from './hotel-details.module';

describe('HotelDetailsModule', () => {
  let hotelDetailsModule: HotelDetailsModule;

  beforeEach(() => {
    hotelDetailsModule = new HotelDetailsModule();
  });

  it('should create an instance', () => {
    expect(hotelDetailsModule).toBeTruthy();
  });
});
