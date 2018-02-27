import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { DatasharingService} from '../datasharing.service'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
 loading: boolean = false;

  constructor(private dataService: DatasharingService, private cdf: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataService.getLoadingStream().subscribe(data => {
      console.log("Received loading")
      this.loading = data;
      this.cdf.detectChanges();
    });
  }

}
