import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDetailsComponent } from './hotel-details.component';
import { HotelDetailsRoutingModule } from './hotel-details-routing.module';
import { WidgetsModule } from '../module-widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    HotelDetailsRoutingModule,
    WidgetsModule
  ],
  declarations: [
    HotelDetailsComponent
  ]
})
export class HotelDetailsModule { }
