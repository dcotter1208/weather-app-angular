import { CurrentWeather } from './current-weather';
import { DailyForecast } from './daily-forecast';

export class Weather {
  constructor(
    public current: CurrentWeather,
    public forecast: DailyForecast[]
  ) {}
}
