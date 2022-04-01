export interface Forecast {
  updated:           Date;
  units:             string;
  forecastGenerator: string;
  generatedAt:       Date;
  updateTime:        Date;
  validTimes:        string;
  elevation:         Elevation;
  periods:           Period[];
  placeName:         string;
}

export interface Elevation {
  unitCode: string;
  value:    number;
}

export interface Period {
  number:           number;
  name:             string;
  startTime:        Date;
  endTime:          Date;
  isDaytime:        boolean;
  temperature:      number;
  temperatureUnit:  string;
  temperatureTrend: null;
  windSpeed:        string;
  windDirection:    string;
  icon:             string;
  shortForecast:    string;
  detailedForecast: string;
}
