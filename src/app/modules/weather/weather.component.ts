import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  template: '<app-header></app-header> <router-outlet></router-outlet>',
})
export class WeatherComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
