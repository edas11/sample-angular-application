import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListComponent } from './city-list.component';

import { CityListRoutingModule } from './city-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CityListRoutingModule
  ],
  declarations: [
    CityListComponent
  ]
})
export class CityListModule { }
