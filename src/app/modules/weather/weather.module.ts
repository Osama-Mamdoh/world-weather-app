import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { SharedModule } from '@shared/shared.module';
import * as fromPages from './pages';
import * as fromComponents from './components';
import { MultiLineChartComponent } from './components/multi-line-chart/multi-line-chart.component';

@NgModule({
  declarations: [
    WeatherComponent,
    ...fromPages.pages,
    ...fromComponents.components,
    MultiLineChartComponent,
  ],
  imports: [CommonModule, WeatherRoutingModule, SharedModule],
})
export class WeatherModule {}
