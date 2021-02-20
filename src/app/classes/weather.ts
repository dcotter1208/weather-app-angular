import { DailyForecast } from './daily-forecast';

export class Weather {
  constructor(
    public temperature: string,
    public icon: string,
    public description: string,
    public forecast: DailyForecast[]
  ) {}
}
