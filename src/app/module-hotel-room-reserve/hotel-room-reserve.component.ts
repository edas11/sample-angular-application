import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor() {}

  ngOnInit() {
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
