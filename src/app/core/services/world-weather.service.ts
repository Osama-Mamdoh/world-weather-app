import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '@core/configs/app.config';
import { FeaturedCity } from '@core/models';
import { ConnectionService } from '@core/utils';
import { environment } from '@environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorldWeatherService {
  private _featuredCities = [
    { name: 'London', image: '/assets/images/city/london.jpg' },
    { name: 'New York', image: '/assets/images/city/newyork.jpg' },
    { name: 'Paris', image: '/assets/images/city/paris.jpg' },
    { name: 'Toronto', image: '/assets/images/city/toronto.jpg' },
  ];
  apiUrlPrefix = environment.baseUrl;

  constructor(private connectionService: ConnectionService) {}

  get featuredCities(): Array<any> {
    return this._featuredCities;
  }

  public getCityWeather(location, numberOfDays): Observable<any> {
    const params = new HttpParams()
      .set('key', AppConfig.apiKey)
      .set('q', location)
      .set('format', 'json')
      .set('num_of_days', numberOfDays)
      .set('lang', 'en');
    return this.connectionService.get(this.apiUrlPrefix, params);
  }
}
