import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SidebarModule} from 'primeng/sidebar';
import {RatingModule} from 'primeng/rating';
import {StepsModule} from 'primeng/steps';

import { WInfoPopupComponent } from './component-w-info-popup/w-info-popup.component';
import { WMobileNavComponent } from './component-w-mobile-nav/w-mobile-nav.component';
import { WRatingComponent } from './component-w-rating/w-rating.component';
import { FormsModule } from '@angular/forms';
import { WButtonComponent } from './component-w-button/w-button.component';

@NgModule({
  declarations: [WInfoPopupComponent, WMobileNavComponent, WRatingComponent, WButtonComponent],
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
    WRatingComponent,
    WButtonComponent,
  ]
})
export class WidgetsModule { }
