import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Hotel } from '../data classes/hotel';
import { Room } from '../data classes/room';
import * as moment from 'moment';
import { ReservationService } from '../services/reservation.service';
import { opacityAnimation } from '../opacity-animation';

@Component({
  selector: 'app-hotel-room-reserve',
  templateUrl: './hotel-room-reserve.component.html',
  styleUrls: ['./hotel-room-reserve.component.scss'],
  animations: [ opacityAnimation ]
})
export class HotelRoomReserveComponent implements OnInit {

  public hotel: Hotel;
  public room: Room;
  public isFormSubmited: boolean;
  private _roomId: string;

  private checkOutAfterCheckInValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const checkIn = control.get(['checkInDate']);
    const checkOut = control.get(['checkOutDate']);
    if (checkIn && checkOut) {
      return this.isCheckOutBeforeOrSame(checkIn.value, checkOut.value) 
        ? { 'checkOutAfterCheckInValidator': true } : null;
    } else {
      return { 'checkOutAfterCheckInValidator': true };
    }
  }

  // tslint:disable-next-line:member-ordering
  formGroup = new FormGroup({
    first: new FormGroup({
      checkInDate: new FormControl('', [Validators.required]),
      checkOutDate: new FormControl('', [Validators.required])
    }, [this.checkOutAfterCheckInValidator]),
    second: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  });

  constructor(private hotels: HotelsService, private route: ActivatedRoute, private router: Router, 
    private rs: ReservationService) {}

  // Sets required data
  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => {
        this.isFormSubmited = false;
        this._roomId = params.get('roomId') as string;
        // canActivate guard should ensure that hotel with this room exists
        return this.hotels.getHotelWithRoom(this._roomId);
      })
    ).subscribe( (hotel: Hotel) => {
      this.hotel = hotel;
      this.room = hotel.getRoom(this._roomId) as Room;
    });
  }

  // tslint:disable:no-non-null-assertion
  onSubmit() {
    this.isFormSubmited = true;
    const firstName = this.formGroup.get(['second', 'firstName'])!.value;
    const lastName = this.formGroup.get(['second', 'lastName'])!.value;
    const email = this.formGroup.get(['second', 'email'])!.value;
    const checkIn = this.formGroup.get(['first', 'checkInDate'])!.value;
    const checkOut = this.formGroup.get(['first', 'checkOutDate'])!.value;
    this.rs.addNew(this.room, this.hotel, firstName, lastName, email,
      checkIn, checkOut, this.room.calcReservationPrice(checkIn, checkOut));
      this.router.navigate(['reservations']);
  }

  isCheckOutBeforeOrSame(checkIn: string, checkOut: string): boolean {
    const checkInDate = moment(checkIn).startOf('day');
    const checkOutDate = moment(checkOut).startOf('day');
    if (checkInDate.isValid() && checkOutDate.isValid()) {
      return checkOutDate.isSameOrBefore(checkInDate);
    } else {
      return true;
    } 
  }

}
