import { Component, Input } from '@angular/core';
import { DailyForecast } from 'src/app/classes/daily-forecast';

@Component({
  selector: 'app-weather-cell',
  templateUrl: './weather-cell.component.html',
  styleUrls: ['./weather-cell.component.css'],
})
export class WeatherCellComponent {
  @Input() data: DailyForecast = new DailyForecast(0, '', '');
}
