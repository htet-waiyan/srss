import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Srss } from '../srss';

import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-riseset',
  templateUrl: './riseset.component.html',
  styleUrls: ['./riseset.component.css']
})
export class RisesetComponent implements OnInit {
  @Input() srss: Srss;

  constructor(private dataService: DatasharingService, private cdf: ChangeDetectorRef) { }

  ngOnInit() {

  }

}
