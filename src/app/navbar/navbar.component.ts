import {
  Component,
  OnInit ,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';

import { SrssService} from '../srss.service';
import { DatasharingService } from '../datasharing.service';
import { Srss } from '../srss';
import {} from '@types/googlemaps';

import * as moment from 'moment'; //importing moment date library

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterViewInit {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchBox',{read: ElementRef}) searchBox: ElementRef;

  private google : any;
  srss: Srss;
  loading: boolean = false;

  constructor(private service: SrssService, private dataService: DatasharingService, private cdf: ChangeDetectorRef) {
    // do nothing
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.google = new google.maps.places.Autocomplete(this.searchBox.nativeElement,{types: ['(cities)']})
    this.google.addListener('place_changed',() => {
      let place = this.google.getPlace();
      this.loading = true;

      this.service.searchByLocation({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()})
        .subscribe(data => {
            this.srss = new Srss();
            this.srss.countryName = place.formatted_address;
            this.srss.name = place.name;
            this.srss.locationId = place.id;
            this.srss.placeId = place.place_id;
            this.srss.lat = place.geometry.location.lat();
            this.srss.lng = place.geometry.location.lng();

            this.srss.dayLength = data.results.day_length;
            this.srss.sunrise_utc = data.results.sunrise;
            this.srss.sunset_utc = data.results.sunset;
            this.srss.sunrise = moment(data.results.sunrise).utc().minutes(place.utc_offset).format('HH:mm:ss');
            this.srss.sunset = moment(data.results.sunset).utc().minutes(place.utc_offset).format('HH:mm:ss');

            console.log(this.srss);
            this.cdf.detectChanges();
            this.loading = false;
            this.dataService.broadcastSrss(this.srss);
        }, err => {
            this.loading = false;
            console.log(err);
        })
    })
  }

  searchLoc(location): void {
    console.log("Searching for "+location);
    //TODO: filter empty, debounce and subscribe
    //this.service.searchByLocation(location);
  }

}
