import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
})
export class DateTimeComponent implements OnInit {
  date = '';
  time = '';

  constructor() {
    const today = new Date();
    this.date = formatDate(today, 'EEEE, MMMM d, y', 'en', 'EST');
    this.time = formatDate(today, 'shortTime', 'en');
  }

  ngOnInit(): void {
    console.log('oninit');
  }
}
