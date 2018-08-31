import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoomReserveRoutingModule } from './hotel-room-reserve-routing.module';
import { HotelRoomReserveComponent } from './hotel-room-reserve.component';
import { ReserveFormFirstStepComponent } from './component-reserve-form-first-step/reserve-form-first-step.component';
import { ReserveFormSecondStepComponent } from './component-reserve-form-second-step/reserve-form-second-step.component';
import { ReserveFormThirdStepComponent } from './component-reserve-form-third-step/reserve-form-third-step.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    HotelRoomReserveRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  declarations: [
    HotelRoomReserveComponent,
    ReserveFormFirstStepComponent,
    ReserveFormSecondStepComponent,
    ReserveFormThirdStepComponent
  ]
})
export class HotelRoomReserveModule { }
