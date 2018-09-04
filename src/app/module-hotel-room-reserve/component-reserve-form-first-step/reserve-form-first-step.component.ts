import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Room } from '../../data classes/room';

@Component({
  selector: 'app-reserve-form-first-step',
  templateUrl: './reserve-form-first-step.component.html',
  styleUrls: ['./reserve-form-first-step.component.scss']
})
export class ReserveFormFirstStepComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() room: Room;
  minCheckInDateValue = new Date(Date.now());
  minCheckOutDateValue = moment(Date.now()).add(1, 'day').toDate();

  constructor() { }

  ngOnInit() {
  }

  get checkIn() {
    const checkIn = this.formGroup.get(['first', 'checkInDate']);
    if (checkIn) {return checkIn; }
  }
  get checkOut() {
    const checkOut = this.formGroup.get(['first', 'checkOutDate']);
    if (checkOut) {return checkOut; }
  }
  get firstStep() {
    const firstStep = this.formGroup.get(['first']);
    if (firstStep) {return firstStep; }
  }

}
