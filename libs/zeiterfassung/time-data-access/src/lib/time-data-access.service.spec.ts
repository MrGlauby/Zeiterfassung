import { TestBed } from '@angular/core/testing';

import { TimeDataAccessService } from './time-data-access.service';

describe('TimeDataAccessService', () => {
  let service: TimeDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
