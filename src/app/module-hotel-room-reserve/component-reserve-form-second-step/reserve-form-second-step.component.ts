import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Room } from '../../data classes/room';

@Component({
  selector: 'app-reserve-form-second-step',
  templateUrl: './reserve-form-second-step.component.html',
  styleUrls: ['./reserve-form-second-step.component.scss']
})
export class ReserveFormSecondStepComponent implements OnInit {

  @Input() formGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
