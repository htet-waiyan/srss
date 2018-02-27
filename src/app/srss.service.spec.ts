import { TestBed, inject } from '@angular/core/testing';

import { SrssService } from './srss.service';

describe('SrssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrssService]
    });
  });

  it('should be created', inject([SrssService], (service: SrssService) => {
    expect(service).toBeTruthy();
  }));
});
