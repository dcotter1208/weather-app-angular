import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/classes/weather';
import { WeatherService } from 'src/app/service/data/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  days = [1, 2, 3, 4, 5, 6, 7];

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
    console.log(response.location);
  }
}
