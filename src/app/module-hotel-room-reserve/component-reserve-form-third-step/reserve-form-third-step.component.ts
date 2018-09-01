import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HotelRoomReserveComponent } from '../hotel-room-reserve.component';
import { Room } from '../../data classes/room';

@Component({
  selector: 'app-reserve-form-third-step',
  templateUrl: './reserve-form-third-step.component.html',
  styleUrls: ['./reserve-form-third-step.component.scss']
})
export class ReserveFormThirdStepComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() room: Room;
  
  constructor() { }

  ngOnInit() {
  }

  date(dateString: string): string {
    const parsed = Date.parse(dateString);
    if (parsed) {
      const originalDate = new Date(parsed);
      const timezoneOffsetDate = new Date(originalDate.getTime() - (originalDate.getTimezoneOffset() * 60000));
      return timezoneOffsetDate.toISOString().split('T')[0];
    } else {
      return '';
    }
  }
}