import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoomReserveRoutingModule } from './hotel-room-reserve-routing.module';
import { HotelRoomReserveComponent } from './hotel-room-reserve.component';
import { ReserveFormFirstStepComponent } from './component-reserve-form-first-step/reserve-form-first-step.component';
import { ReserveFormSecondStepComponent } from './component-reserve-form-second-step/reserve-form-second-step.component';
import { ReserveFormThirdStepComponent } from './component-reserve-form-third-step/reserve-form-third-step.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    HotelRoomReserveRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    MatFormFieldModule
  ],
  declarations: [
    HotelRoomReserveComponent,
    ReserveFormFirstStepComponent,
    ReserveFormSecondStepComponent,
    ReserveFormThirdStepComponent
  ]
})
export class HotelRoomReserveModule { }
