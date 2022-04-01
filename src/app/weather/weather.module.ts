import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Created modules
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { TemperaturePipe } from './pipes/temperature.pipe';



@NgModule({
  declarations: [
    WeatherForecastComponent,
    WeatherComponent,
    TemperaturePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PrimeNgModule
  ],
  exports: [
  ]
})
export class WeatherModule { }
