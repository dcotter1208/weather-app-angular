import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateTimeComponent } from './components/date-time/date-time.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { TodayWeatherCellComponent } from './components/today-weather-cell/today-weather-cell.component';

@NgModule({
  declarations: [AppComponent, DateTimeComponent, ForecastComponent, TodayWeatherCellComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
