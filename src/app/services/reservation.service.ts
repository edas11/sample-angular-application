import { Injectable } from '@angular/core';
import { Reservation } from '../data classes/reservation';
import { Room } from '../data classes/room';
import { Hotel } from '../data classes/hotel';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private _reservations: Reservation[] = [];
  private _nextRoomId = 1;

  constructor() { }

  addNew(room: Room, hotel: Hotel, firstName: string, lastName: string, 
      email: string, checkInDate: string, checkOutDate: string, totalPrice: string): string {
    const reservationId = this.getIdAndIncrement().toFixed(0);
    const reservation = new Reservation(reservationId, room, hotel, firstName, lastName,
       email, checkInDate, checkOutDate, totalPrice);
    this._reservations.push(reservation);
    return reservationId;
  }

  get(id: string): Reservation | null {
    const reservation = this._reservations.find( (res: Reservation) => {
      return res.id === id;
    });
    if (reservation) {
      return reservation;
    } else {
      return null;
    }
  }

  getAll(): Reservation[] {
    return this._reservations.slice();
  }

  private getIdAndIncrement(): number {
    const roomId = this._nextRoomId;
    this._nextRoomId = this._nextRoomId + 1;
    return roomId;
  }
}
