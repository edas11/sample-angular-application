import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list.component';

const routes: Routes = [
  { path: 'hotels/:city', component: HotelListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HotelListRuotingModule { }
