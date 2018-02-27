import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef
} from '@angular/core';

import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() locationName: string;

  constructor(private dataService: DatasharingService, private cdf: ChangeDetectorRef) { }

  ngOnInit() {

  }

}
