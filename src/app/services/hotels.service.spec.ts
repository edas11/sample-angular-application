import { TestBed, inject } from '@angular/core/testing';
import { Hotel } from '../data classes/hotel';
import { HotelsService } from './hotels.service';
import { CitiesService } from './cities.service';
import { HotelsData } from './hotels-data';
import { City } from '../data classes/city';

describe('HotelsService', () => {
  let data;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelsService, CitiesService]
    });
    data = HotelsData.getHotelsData(TestBed.get(CitiesService));
  });

  it('should be created', inject([HotelsService], (service: HotelsService) => {
    expect(service).toBeTruthy();
  }));

  it('should give hotel by name', inject([HotelsService], (service: HotelsService) => {
    expect(service.getHotel('Hotel Zemaites')).toEqual(data[1]);
  }));

  it('should give null hotel if name not found', inject([HotelsService], (service: HotelsService) => {
    const nullHotel = new Hotel('', '', new City('', '', ''), 0, {avgRating: 0, reviewsNumber: 0}, '', [], [], [], '', '');
    expect(service.getHotel('abc')).toEqual(nullHotel);
  }));

  it('should give all hotels in a city', inject([HotelsService], (service: HotelsService) => {
    const cs = TestBed.get(CitiesService);
    expect(service.getHotelsByCity(cs.getCity('Paris'))).toEqual([data[5], data[6], data[7]]);
  }));
  
  it('should give an empty array if queried by city and there are no hotels in a city', 
      inject([HotelsService], (service: HotelsService) => {
    expect(service.getHotelsByCity(new City('', '', ''))).toEqual([]);
  }));

  it('should give hotel with specific room if there is one and null otherwise',
      inject([HotelsService], (service: HotelsService) => {
    expect(service.getHotelWithRoom('1')).toEqual(data[0]);
    expect(service.getHotelWithRoom('11')).toEqual(data[5]);
    expect(service.getHotelWithRoom('-1')).toEqual(null);
    expect(service.getHotelWithRoom('123')).toEqual(null);
  }));
  
});
