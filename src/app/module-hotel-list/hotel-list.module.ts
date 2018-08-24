import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list.component';
import { HotelListRuotingModule } from './hotel-list-ruoting.module';
import { WidgetsModule } from '../module-widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    HotelListRuotingModule,
    WidgetsModule
  ],
  declarations: [ HotelListComponent ]
})
export class HotelListModule { }
