import { Component, OnInit } from '@angular/core';
import { FeaturedCity } from '@core/models';
import { WorldWeatherService } from '@core/services/world-weather.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public featuredCities: Array<FeaturedCity> = [];
  public data = [
    {
      name: 'USA',
      values: [
        { date: '2020-05-12T12:19:00+00:00', price: 100 },
        { date: '2020-05-14T12:19:00+00:00', price: 110 },
        { date: '2020-05-16T12:19:00+00:00', price: 145 },
        { date: '2020-05-18T12:19:00+00:00', price: 241 },
        { date: '2020-05-20T12:19:00+00:00', price: 101 },
      ],
    },
    {
      name: 'Canada',
      values: [
        { date: '2020-05-12T12:19:00+00:00', price: 200 },
        { date: '2020-05-14T12:19:00+00:00', price: 120 },
        { date: '2020-05-16T12:19:00+00:00', price: 33 },
        { date: '2020-05-18T12:19:00+00:00', price: 21 },
        { date: '2020-05-20T12:19:00+00:00', price: 51 },
      ],
    },
    {
      name: 'Maxico',
      values: [
        { date: '2020-05-12T12:19:00+00:00', price: 50 },
        { date: '2020-05-14T12:19:00+00:00', price: 10 },
        { date: '2020-05-16T12:19:00+00:00', price: 5 },
        { date: '2020-05-18T12:19:00+00:00', price: 71 },
        { date: '2020-05-20T12:19:00+00:00', price: 20 },
      ],
    },
  ];
  public width = 500;
  public height = 300;
  public margin = 50;
  public duration = 250;

  public lineOpacity = '0.25';
  public lineOpacityHover = '0.85';
  public otherLinesOpacityHover = '0.1';
  public lineStroke = '1.5px';
  public lineStrokeHover = '2.5px';

  public circleOpacity = '0.85';
  public circleOpacityOnLineHover = '0.25';
  public circleRadius = 3;
  public circleRadiusHover = 6;

  public svg;
  public svgInner;
  public yScale;
  public xScale;
  public xAxis;
  public yAxis;
  public lineGroup;
  public color;
  public line;
  constructor(private worldWeatherService: WorldWeatherService) {}

  ngOnInit(): void {
    this.worldWeatherService.featuredCities.forEach((city) => {
      this.featuredCities.push(new FeaturedCity(city.name, city.image));
    });
  }
}
