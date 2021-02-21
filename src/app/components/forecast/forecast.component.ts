import { Component, Input } from '@angular/core';
import { CurrentWeather } from 'src/app/classes/current-weather';
import { DailyForecast } from 'src/app/classes/daily-forecast';
import { WeatherService } from 'src/app/service/data/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent {
  @Input() forecast: DailyForecast[] = [];
  @Input() current: CurrentWeather = {
    temp: '',
    icon: '',
    description: '',
  };

  constructor(private service: WeatherService) {}
}
