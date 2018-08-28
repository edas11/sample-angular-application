import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelDetailsComponent } from './hotel-details.component';

const routes: Routes = [
  { path: 'hotels/:hotelName', component: HotelDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelDetailsRoutingModule { }
