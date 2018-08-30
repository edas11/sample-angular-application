import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelRoomReserveComponent } from './hotel-room-reserve.component';

const routes: Routes = [
  { path: 'hotels/reserve-room/:roomId', component: HotelRoomReserveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoomReserveRoutingModule { }
