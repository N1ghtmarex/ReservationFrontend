import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SectionReservation } from 'src/app/models/addSectionReservationDto';
import { SectionReservationsService } from 'src/app/services/section-reservations.service';

@Component({
  selector: 'app-add-section-reservation',
  templateUrl: './add-section-reservation.component.html',
  styleUrls: ['./add-section-reservation.component.scss']
})
export class AddSectionReservationComponent implements OnInit {
  form!: FormGroup

  reservation = new SectionReservation();

  constructor(private reservationService: SectionReservationsService){
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      dayOfWeek: new FormControl(null, [Validators.required]),
      time: new FormControl(null, [Validators.required]),
      duration: new FormControl(null, [Validators.required]),
      period: new FormControl(null, [Validators.required]),
      sectionName: new FormControl(null, [Validators.required])
    })
  }

  addReservation(reservation: SectionReservation) {
    this.reservationService.addReservation(reservation).subscribe(() => {
    });
  }
}
