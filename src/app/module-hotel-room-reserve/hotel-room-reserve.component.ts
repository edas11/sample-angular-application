import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Hotel } from '../data classes/hotel';
import { Room } from '../data classes/room';

@Component({
  selector: 'app-hotel-room-reserve',
  templateUrl: './hotel-room-reserve.component.html',
  styleUrls: ['./hotel-room-reserve.component.scss']
})
export class HotelRoomReserveComponent implements OnInit {

  formGroup = new FormGroup({
    first: new FormGroup({
      checkInDate: new FormControl(''),
      checkOutDate: new FormControl('')
    }),
    second: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    }),
    third: new FormGroup({
      
    }),
  });
  public hotel: Hotel;
  public room: Room | null;
  private _roomId: string;

  constructor(private hotels: HotelsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => {
        this._roomId = params.get('roomId') as string;
        const hotel = this.hotels.getHotelWithRoom(this._roomId);
        if (hotel) {
          return this.hotels.getHotelWithRoom(this._roomId);
        } else {
          this.router.navigate(['hotels']);
          return Hotel.nullHotel();
        }
      }
      )
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

}
