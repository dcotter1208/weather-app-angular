import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  days = [1, 2, 3, 4, 5, 6, 7];

  constructor() {}

  ngOnInit(): void {}
}
