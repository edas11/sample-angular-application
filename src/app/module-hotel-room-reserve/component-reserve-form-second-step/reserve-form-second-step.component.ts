import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
