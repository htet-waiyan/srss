import { Component, OnInit } from '@angular/core';

import { DatasharingService } from './datasharing.service';
import { SrssService } from './srss.service';
import { Srss } from './srss';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  /*constructor(private dataService: DatasharingService, private srssService: SrssService){}

  ngOnInit(){
    let srss = new Srss();
    srss.countryName = 'Paris, Frence';
    srss.name = 'Paris';
    srss.lat = 48.8566;
    srss.lng = 2.3522;
    srss.locationId = 'default';
    srss.placeId = 'default';

    this.srssService.searchByLocation({lat: srss.lat, lng: srss.lng})
        .subscribe(data => {
            srss.dayLength = data.day_length;
            srss.sunrise = moment(data.sunrise).utc().minutes(place.utc_offset).format('HH:mm:ss');
            srss.sunset = moment(data.sunset).utc().minutes(place.utc_offset).format('HH:mm:ss');

            this.dataService.broadcastSrss(srss);
        })
  }*/
}
