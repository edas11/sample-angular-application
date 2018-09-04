import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingModule} from 'primeng/rating';

import { WRatingComponent } from './component-w-rating/w-rating.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WRatingComponent],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule
  ],
  exports: [
    WRatingComponent
  ]
})
export class WidgetsModule { }
