export class DailyForecast {
  constructor(
    public maxTemp: number,
    public icon: string,
    public description: string,
    public dayOfWeek: string
  ) {}
}
