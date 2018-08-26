import { TestBed, inject } from '@angular/core/testing';
import { Hotel } from '../hotel';
import { HotelsService } from './hotels.service';
import { CitiesService } from './cities.service';
import { HotelsData } from './hotels-data';
import { City } from '../city';

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

  it('should give null hotel if name not found or null or undefined', inject([HotelsService], (service: HotelsService) => {
    const nullHotel = new Hotel('', '', null, 0, [0, 0], '', [''], [''], [null]);
    expect(service.getHotel('abc')).toEqual(nullHotel);
    expect(service.getHotel(null)).toEqual(nullHotel);
    expect(service.getHotel(undefined)).toEqual(nullHotel);
  }));

  it('should give all hotels in a city', inject([HotelsService], (service: HotelsService) => {
    const cs = TestBed.get(CitiesService);
    expect(service.getHotelsByCity(cs.getCity('Paris'))).toEqual([data[5], data[6], data[7]]);
  }));
  
  it('should give an empty array if queried by city and there are no hotels in a city or city is null, undefined', 
      inject([HotelsService], (service: HotelsService) => {
    expect(service.getHotelsByCity(null)).toEqual([]);
    expect(service.getHotelsByCity(undefined)).toEqual([]);
    expect(service.getHotelsByCity(new City('', '', ''))).toEqual([]);
  }));

  it('should always return the same hotel instances', inject([HotelsService], (service: HotelsService) => {
    const cs = TestBed.get(CitiesService);
    const zemaite1 = service.getHotel('Hotel Zemaites');
    const zemaite2 = service.getHotel('Hotel Zemaites');
    const vilniusHotels = service.getHotelsByCity(cs.getCity('Vilnius'));
    expect(zemaite1).toBe(zemaite2);
    expect(zemaite1).toBe(vilniusHotels[1]);
    expect(zemaite2).toBe(vilniusHotels[1]);
  }));
  
});
