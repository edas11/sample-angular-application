import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SidebarModule} from 'primeng/sidebar';
import {RatingModule} from 'primeng/rating';

import { WInfoPopupComponent } from './component-w-info-popup/w-info-popup.component';
import { WMobileNavComponent } from './component-w-mobile-nav/w-mobile-nav.component';
import { WRatingComponent } from './component-w-rating/w-rating.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WInfoPopupComponent, WMobileNavComponent, WRatingComponent],
  imports: [
    CommonModule,
    FormsModule,
    OverlayPanelModule,
    SidebarModule,
    RatingModule
  ],
  exports: [
    WInfoPopupComponent,
    WMobileNavComponent,
    WRatingComponent
  ]
})
export class WidgetsModule { }
