import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CitylistComponent } from './components/citylist.component';
import { WeatherComponent } from './components/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CitylistComponent,
    WeatherComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
