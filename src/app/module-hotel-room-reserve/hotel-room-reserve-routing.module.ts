import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelRoomReserveComponent } from './hotel-room-reserve.component';
import { ReservationFormGuardService } from './reservation-form-guard.service';

const routes: Routes = [
  { 
    path: 'hotels/reserve-room/:roomId',
    component: HotelRoomReserveComponent,
    canActivate: [ReservationFormGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoomReserveRoutingModule { }
