import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetsModule } from './module-widgets/widgets.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component-header/header.component';
import { FooterComponent } from './component-footer/footer.component';
import { AppRuotingModule } from './app-ruoting.module';
import { CityListModule } from './module-city-list/city-list.module';
import { HotelListModule } from './module-hotel-list/hotel-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    WidgetsModule,
    BrowserAnimationsModule,
    CityListModule,
    HotelListModule,
    AppRuotingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
