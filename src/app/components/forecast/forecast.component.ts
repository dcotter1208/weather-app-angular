import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/classes/current-weather';
import { DailyForecast } from 'src/app/classes/daily-forecast';
import { Weather } from 'src/app/classes/weather';
import { WeatherService } from 'src/app/service/data/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  forecast: DailyForecast[] = [];
  current: CurrentWeather = {
    temp: '',
    icon: '',
    description: '',
  };

  constructor(private service: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.service
      .executeWeatherService()
      .subscribe((res: Weather) => this.handleSuccess(res));
  }

  handleSuccess(response: Weather): void {
    this.forecast = response.forecast;
  }
}
