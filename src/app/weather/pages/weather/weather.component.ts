import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';

import { MessageService } from 'primeng/api';
import { Forecast, Period } from '../../interfaces/forecast.interfaces';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [MessageService]
})
export class WeatherComponent implements OnInit {

  urlBase: string = environment.urlBase;
  shareUrl: string = '';
  hourlyForecast: Period[] = [];
  zipCode: string = '';
  showSpinner: boolean = false;
  celsius: boolean = false;
  placeName: string = '';

  constructor( private weatherService: WeatherService,
                private messageService: MessageService,
                private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    let routeZipCode = '';
    // link shared
    this.activatedRoute.params.subscribe(({ zipCode }) => {
      routeZipCode = zipCode;
    })

    let storedZipCode = localStorage.getItem('zipCode');

    // check local storage or param zip code
    if ( routeZipCode ) {
      this.zipCode = routeZipCode;
      this.getForecast()
    } else if ( storedZipCode ) {
      this.zipCode = storedZipCode;
      this.getForecast()
    }
  }

  getForecast() {

    this.cleanState();

    // validations for zipcode
    if ( this.zipCode.length !== 5 || isNaN(Number(this.zipCode)) ){
      this.messageService.add({severity:'error', summary:'Error', detail:'Zip Code must be 5 digits'})
      this.showSpinner = false;
      return;
    }

    // get forecast from service
    this.weatherService.getForecast( this.zipCode )
    .pipe(
      // finally statement
      finalize( () => {
        this.showSpinner = false;
        // this.zipCode = '';
      })
    )
    .subscribe( (res: Forecast) => {
      console.log(res);
      this.hourlyForecast = res.periods;
      this.placeName = res.placeName;
      localStorage.setItem('zipCode', this.zipCode);
      this.shareUrl = `${this.urlBase}/${this.zipCode}`
    }, error => {
      console.log(error);

      if ( error.status === 500 ) {
        this.messageService.add({severity:'error', summary:'Error', detail: 'Try again later'});
      } else {
        this.messageService.add({severity:'error', summary:'Error', detail:error.error.msg});
      }
    });

  }

  cleanState() {
    // clean state
    this.hourlyForecast = [];
    this.messageService.clear();
    this.showSpinner = true;
    this.placeName = '';
  }

}
