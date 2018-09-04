import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SidebarModule} from 'primeng/sidebar';
import {RatingModule} from 'primeng/rating';

import { WRatingComponent } from './component-w-rating/w-rating.component';
import { FormsModule } from '@angular/forms';
import { WButtonComponent } from './component-w-button/w-button.component';

@NgModule({
  declarations: [WRatingComponent, WButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayPanelModule,
    SidebarModule,
    RatingModule
  ],
  exports: [
    WRatingComponent,
    WButtonComponent
  ]
})
export class WidgetsModule { }
