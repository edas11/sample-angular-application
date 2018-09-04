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

  get firstName() {
    const firstName = this.formGroup.get(['second', 'firstName']);
    if (firstName) {return firstName; }
  }
  get lastName() {
    const lastName = this.formGroup.get(['second', 'lastName']);
    if (lastName) {return lastName; }
  }
  get email() {
    const email = this.formGroup.get(['second', 'email']);
    if (email) {return email; }
  }

}
