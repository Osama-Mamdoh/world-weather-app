import { Component, Input, OnInit } from '@angular/core';
import { FeaturedCity } from '@core/models/city';
import { WorldWeatherService } from '@core/services/world-weather.service';

@Component({
  selector: 'app-featured-city-card',
  templateUrl: './featured-city-card.component.html',
  styleUrls: ['./featured-city-card.component.scss'],
})
export class FeaturedCityCardComponent implements OnInit {
  @Input() city: FeaturedCity;
  constructor(private worldWeatherService: WorldWeatherService) {}

  ngOnInit(): void {
    // this.worldWeatherService
    //   .getCityWeather(this.city.name, 1)
    //   .subscribe((city) => {
    //     this.city.temperature = city.data.current_condition[0].temp_C;
    //     this.city.generalWeather =
    //       city.data.current_condition[0].weatherDesc[0].value;
    //     this.city.time = city.data.current_condition[0].observation_time;
    //   });
  }
}
