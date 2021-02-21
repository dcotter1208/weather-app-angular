import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrentWeather } from 'src/app/classes/current-weather';
import { DailyForecast } from 'src/app/classes/daily-forecast';
import { Weather } from 'src/app/classes/weather';
import { WeatherService } from 'src/app/service/data/weather.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() weather = new EventEmitter<Weather>();
  inputValue = '';

  constructor(private service: WeatherService) {}

  ngOnInit(): void {
    this.getWeather('Detroit');
  }

  onUserInput(event: any): void {
    this.inputValue = event.target.value;
  }

  getWeather(location?: string): void {
    const searchLocation = location ? location : this.inputValue;
    this.service
      .executeWeatherService(searchLocation.trim())
      .subscribe((res: Weather) => this.handleSuccess(res));
  }
  handleSuccess(response: Weather): void {
    this.weather.emit(response);
  }
}
