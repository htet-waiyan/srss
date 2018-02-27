import { Injectable } from '@angular/core';
import { Srss } from './srss';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class DatasharingService {
  private srssData: Srss;
  private dataStream : any;

  constructor() {
    this.dataStream = new Subject<Srss>();
  }

  broadcastSrss(data: Srss){
    console.log('Broadcasting data..');
    this.dataStream.next(data);
  }

  getStream(): any{
    return this.dataStream;
  }
}
