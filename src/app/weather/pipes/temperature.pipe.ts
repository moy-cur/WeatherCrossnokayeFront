import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(temp: string, celsius: boolean = false): string {
    if ( celsius ) {

      // calculate in celsius and round
      const tempCelsius = (Number(temp) - 32)/1.8;

      const tempRound = Math.round(tempCelsius);

      return `${ tempRound }°C`;
    }
    return `${temp}°F`;
  }

}
