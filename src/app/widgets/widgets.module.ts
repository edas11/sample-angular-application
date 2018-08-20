import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import { WInfoPopupComponent } from './w-info-popup/w-info-popup.component';

@NgModule({
  declarations: [WInfoPopupComponent],
  imports: [
    CommonModule,
    OverlayPanelModule
  ],
  exports: [
    WInfoPopupComponent
  ]
})
export class WidgetsModule { }
