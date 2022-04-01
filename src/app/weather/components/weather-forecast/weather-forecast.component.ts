import { Component, Input, OnInit } from '@angular/core';

import { Period } from '../../interfaces/forecast.interfaces';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  @Input() forecasts: Period[] = [];
  @Input() celsius:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
