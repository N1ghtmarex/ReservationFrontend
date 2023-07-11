import { TestBed } from '@angular/core/testing';

import { SectionReservationsService } from './section-reservations.service';

describe('SectionReservationsService', () => {
  let service: SectionReservationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionReservationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
