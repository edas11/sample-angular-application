import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';
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
    const date = moment(dateString);
    if (date.isValid()) {
      date.local();
      return date.format('YYYY-MM-DD');
    } else {
      return '';
    }
  }
}
