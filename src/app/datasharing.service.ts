import { Injectable } from '@angular/core';
import { Srss } from './srss';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class DatasharingService {
  private srssData: Srss;
  private dataStream : any;
  private loadingStream: any;
  private loading: boolean;

  constructor() {
    this.dataStream = new Subject<Srss>();
    this.loadingStream = new Subject<boolean>();
  }

  broadcastLoading(loading: boolean){
    console.log('Loading Broadcast..');
    this.loadingStream.next(loading);
  }

  broadcastSrss(data: Srss){
    console.log('Broadcasting data..');
    this.dataStream.next(data);
  }

  getStream(): any{
    return this.dataStream;
  }

  getLoadingStream(): any{
    return this.loadingStream;
  }
}
