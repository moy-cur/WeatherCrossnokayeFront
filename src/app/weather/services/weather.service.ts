import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Forecast } from '../interfaces/forecast.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private _urlBase = environment.urlAPIBase;

  constructor( private http: HttpClient ) { }

  getForecast( zipCode: string ): Observable<Forecast> {
    return this.http.get<Forecast>(`${this._urlBase}/forecast/${ zipCode }/hourly`);
  }
}
