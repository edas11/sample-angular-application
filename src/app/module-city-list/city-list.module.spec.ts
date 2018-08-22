import { CityListModule } from './city-list.module';

describe('CityListModule', () => {
  let cityListModule: CityListModule;

  beforeEach(() => {
    cityListModule = new CityListModule();
  });

  it('should create an instance', () => {
    expect(cityListModule).toBeTruthy();
  });
});
