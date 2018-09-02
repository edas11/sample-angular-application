import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Hotel } from '../data classes/hotel';
import { Room } from '../data classes/room';
import * as moment from 'moment';

@Component({
  selector: 'app-hotel-room-reserve',
  templateUrl: './hotel-room-reserve.component.html',
  styleUrls: ['./hotel-room-reserve.component.scss']
})
export class HotelRoomReserveComponent implements OnInit {

  public hotel: Hotel;
  public room: Room | null;
  private _roomId: string;

  private checkOutAfterCheckInValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    console.log('a');
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

  constructor(private hotels: HotelsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => {
        this._roomId = params.get('roomId') as string;
        // canActivate guard should ensure that hotel with this room exists
        return this.hotels.getHotelWithRoom(this._roomId);
      })
    ).subscribe( (hotel: Hotel) => {
      this.hotel = hotel;
      this.room = hotel.getRoom(this._roomId);
    });
  }

  onSubmit() {
      const first = this.formGroup.get('first') as FormGroup;
      const second = this.formGroup.get('second') as FormGroup;
      console.log(first.get('checkInDate'));
      console.log(first.get('checkOutDate'));
      console.log(second.get('firstName'));
      console.log(second.get('lastName'));
      console.log(second.get('email'));
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
