import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reserve-form-third-step',
  templateUrl: './reserve-form-third-step.component.html',
  styleUrls: ['./reserve-form-third-step.component.scss']
})
export class ReserveFormThirdStepComponent implements OnInit {

  @Input() formGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
