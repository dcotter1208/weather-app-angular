import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-today-weather-cell',
  templateUrl: './today-weather-cell.component.html',
  styleUrls: ['./today-weather-cell.component.css'],
})
export class TodayWeatherCellComponent {
  @Input() temp = '';
  @Input() icon = '';
}
