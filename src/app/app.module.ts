import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component-header/header.component';
import { FooterComponent } from './component-footer/footer.component';
import { AppRuotingModule } from './app-ruoting.module';
import { CityListModule } from './module-city-list/city-list.module';
import { HotelListModule } from './module-hotel-list/hotel-list.module';
import { HotelDetailsModule } from './module-hotel-details/hotel-details.module';
import { HotelRoomReserveModule } from './module-hotel-room-reserve/hotel-room-reserve.module';
import { ReservationsModule } from './module-reservations/reservations.module';
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    CityListModule,
    HotelListModule,
    HotelDetailsModule,
    HotelRoomReserveModule,
    ReservationsModule,
    AppRuotingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
