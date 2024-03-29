import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/classes/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  executeWeatherService(location: string): Observable<Weather> {
    return this.http.get<Weather>(
      `http://localhost:8080/weather-forecast?location=${location}&key=`
    );
  }
}
