import { Component } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent {
  days = [1, 2, 3, 4, 5, 6, 7];
}
