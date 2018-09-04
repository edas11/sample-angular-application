import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListComponent } from './city-list.component';
import { CityListRoutingModule } from './city-list-routing.module';
import { CityItemComponent } from './component-city-item/city-item.component';

@NgModule({
  imports: [
    CommonModule,
    CityListRoutingModule
  ],
  declarations: [
    CityListComponent,
    CityItemComponent
  ]
})
export class CityListModule {

}
