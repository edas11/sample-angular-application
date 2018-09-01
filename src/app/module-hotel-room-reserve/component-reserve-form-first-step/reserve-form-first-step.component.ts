import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HotelRoomReserveComponent } from '../hotel-room-reserve.component';
import { Room } from '../../data classes/room';

@Component({
  selector: 'app-reserve-form-first-step',
  templateUrl: './reserve-form-first-step.component.html',
  styleUrls: ['./reserve-form-first-step.component.scss']
})
export class ReserveFormFirstStepComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() room: Room;
  
  constructor() { }

  ngOnInit() {
  }

}
