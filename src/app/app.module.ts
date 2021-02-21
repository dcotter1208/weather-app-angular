import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateTimeComponent } from './components/date-time/date-time.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { TodayWeatherCellComponent } from './components/today-weather-cell/today-weather-cell.component';
import { WeatherCellComponent } from './components/weather-cell/weather-cell.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeComponent,
    ForecastComponent,
    TodayWeatherCellComponent,
    WeatherCellComponent,
    SearchBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
