import { TestBed, inject } from '@angular/core/testing';

import { DatasharingService } from './datasharing.service';

describe('DatasharingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasharingService]
    });
  });

  it('should be created', inject([DatasharingService], (service: DatasharingService) => {
    expect(service).toBeTruthy();
  }));
});
