import { Component } from '@angular/core';
import { CurrentWeather } from './classes/current-weather';
import { DailyForecast } from './classes/daily-forecast';
import { Weather } from './classes/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  initialDailyForecast: DailyForecast[] = [];

  weather: Weather = new Weather(
    new CurrentWeather('', '', ''),
    this.initialDailyForecast
  );

  handleIncomingWeather(weather: Weather) {
    this.weather = weather;
  }
}
