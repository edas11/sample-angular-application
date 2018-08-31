import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reserve-form-first-step',
  templateUrl: './reserve-form-first-step.component.html',
  styleUrls: ['./reserve-form-first-step.component.scss']
})
export class ReserveFormFirstStepComponent implements OnInit {

  @Input() formGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
