import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoomReserveRoutingModule } from './hotel-room-reserve-routing.module';
import { HotelRoomReserveComponent } from './hotel-room-reserve.component';

@NgModule({
  imports: [
    CommonModule,
    HotelRoomReserveRoutingModule
  ],
  declarations: [
    HotelRoomReserveComponent
  ]
})
export class HotelRoomReserveModule { }
