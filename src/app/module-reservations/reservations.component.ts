import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../data classes/reservation';
import { Room } from '../data classes/room';
import { Hotel } from '../data classes/hotel';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  constructor(private rs: ReservationService) { }

  ngOnInit() {
  }

  get reservations(): Reservation[] {
    return this.rs.getAll();
  }

  cancelReservation(res: Reservation) {
    this.rs.delete(res.id);
  }
}
