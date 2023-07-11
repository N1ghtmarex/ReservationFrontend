import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionReservationComponent } from './add-section-reservation.component';

describe('AddSectionReservationComponent', () => {
  let component: AddSectionReservationComponent;
  let fixture: ComponentFixture<AddSectionReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSectionReservationComponent]
    });
    fixture = TestBed.createComponent(AddSectionReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
