import { TestBed } from '@angular/core/testing';

import { IndividualReservationsService } from './individual-reservations.service';

describe('IndividualReservationsService', () => {
  let service: IndividualReservationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualReservationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
