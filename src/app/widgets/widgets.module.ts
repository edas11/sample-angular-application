import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SidebarModule} from 'primeng/sidebar';

import { WInfoPopupComponent } from './w-info-popup/w-info-popup.component';
import { WMobileNavComponent } from './w-mobile-nav/w-mobile-nav.component';

@NgModule({
  declarations: [WInfoPopupComponent, WMobileNavComponent],
  imports: [
    CommonModule,
    OverlayPanelModule,
    SidebarModule
  ],
  exports: [
    WInfoPopupComponent,
    WMobileNavComponent
  ]
})
export class WidgetsModule { }
