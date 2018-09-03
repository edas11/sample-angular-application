import { TestBed, inject } from '@angular/core/testing';

import { ReservationService } from './reservation.service';
import { Hotel } from '../data classes/hotel';
import { Room } from '../data classes/room';
import { Reservation } from '../data classes/reservation';

describe('ReservationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationService]
    });
  });

  it('should be created', inject([ReservationService], (service: ReservationService) => {
    expect(service).toBeTruthy();
  }));

  it('should give reservation by id or null if not found', inject([ReservationService], (service: ReservationService) => {
    const resId = service.addNew(Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');
    const res1 = new Reservation(resId, Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');

    expect(service.get(resId)).toEqual(res1);
    expect(service.get('0')).toEqual(null);
    expect(service.get('1.5')).toEqual(null);
    expect(service.get('fsdjkbgsk')).toEqual(null);
  }));

  it('should give array of all reservations. Changing array should be safe',
      inject([ReservationService], (service: ReservationService) => {
    const red1Id = service.addNew(Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');
    const red2Id = service.addNew(Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');
    const red3Id = service.addNew(Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');
    const res1 = new Reservation(red1Id, Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');
    const res2 = new Reservation(red2Id, Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');
    const res3 = new Reservation(red3Id, Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');
    const resulArray = service.getAll();

    expect(resulArray).toEqual([res1, res2, res3]);
    resulArray.pop();
    expect(service.getAll()).toEqual([res1, res2, res3]);
  }));

  it('should allow to delete a reservation',
    inject([ReservationService], (service: ReservationService) => {
  const res1Id = service.addNew(Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');
  const res2Id = service.addNew(Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');
  const res3Id = service.addNew(Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');
  const res1 = new Reservation(res1Id, Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');
  const res2 = new Reservation(res2Id, Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');
  const res3 = new Reservation(res3Id, Room.nullRoom(), Hotel.nullHotel(), '', '', '', '', '', '');

  expect(service.getAll()).toEqual([res1, res2, res3]);
  service.delete('55');
  expect(service.getAll()).toEqual([res1, res2, res3]);
  service.delete(res2Id);
  expect(service.getAll()).toEqual([res1, res3]);
  expect(service.get(res1Id)).toEqual(res1);
  expect(service.get(res2Id)).toEqual(null);
  expect(service.get(res3Id)).toEqual(res3);
  }));

});
