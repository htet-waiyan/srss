import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Srss } from '../srss';
import { DatasharingService } from '../datasharing.service'

@Component({
  selector: 'app-risesetmain',
  templateUrl: './risesetmain.component.html',
  styleUrls: ['./risesetmain.component.css']
})
export class RisesetmainComponent implements OnInit {
  srss: Srss;
  loading: boolean;
  constructor(private dataService: DatasharingService, private cdf: ChangeDetectorRef) { }

  ngOnInit() {
      this.dataService.getStream().subscribe(data => {
        console.log('receiving from app-main')
        this.srss = data;
        this.cdf.detectChanges();
      });
  }

}
