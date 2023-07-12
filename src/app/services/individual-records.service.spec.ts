import { TestBed } from '@angular/core/testing';

import { IndividualRecordsService } from './individual-records.service';

describe('IndividualRecordsService', () => {
  let service: IndividualRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
