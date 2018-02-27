import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {} from '@types/googlemaps';

@Injectable()
export class SrssService {
  private service: any;

  constructor(private http: HttpClient, @Inject('SRSS_API_URL') private srssAPI:string,
    @Inject('GOGL_API_URL') private goglAPI: string,
    @Inject('API_KEY_GOGL') private apiKey: string) {

     //this.service = new google.maps.places.Autocomplete(document.getElementById('searchBox'),{types:['(cities)']})
  }



  //TODO: change return type to SRSS model
  searchByLocation(location:any): any {
     return this.http.get(this.srssAPI,{params:{lat: location.lat,lng: location.lng, date: 'today', formatted: '0'}})
  }

}
