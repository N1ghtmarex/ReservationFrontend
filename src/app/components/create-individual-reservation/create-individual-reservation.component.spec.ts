import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIndividualReservationComponent } from './create-individual-reservation.component';

describe('CreateIndividualReservationComponent', () => {
  let component: CreateIndividualReservationComponent;
  let fixture: ComponentFixture<CreateIndividualReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateIndividualReservationComponent]
    });
    fixture = TestBed.createComponent(CreateIndividualReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
