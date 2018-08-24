import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list.component';
import { HotelListRuotingModule } from './hotel-list-ruoting.module';

@NgModule({
  imports: [
    CommonModule,
    HotelListRuotingModule
  ],
  declarations: [ HotelListComponent ]
})
export class HotelListModule { }
