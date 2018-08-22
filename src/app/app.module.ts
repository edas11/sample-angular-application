import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetsModule } from './widgets/widgets.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRuotingModule } from './app-ruoting.module';
import { CityListModule } from './city-list/city-list.module';

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
    AppRuotingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
