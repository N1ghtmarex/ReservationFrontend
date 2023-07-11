import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IndividualReservation } from 'src/app/models/addIndividualReservationDto';
import { IndividualReservationsService } from 'src/app/services/individual-reservations.service'

@Component({
  selector: 'app-create-individual-reservation',
  templateUrl: './create-individual-reservation.component.html',
  styleUrls: ['./create-individual-reservation.component.scss']
})
export class CreateIndividualReservationComponent implements OnInit {
  form!: FormGroup

  reservation = new IndividualReservation();

  constructor(private reservationService: IndividualReservationsService){
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      date: new FormControl(null, [Validators.required]),
      duration: new FormControl(null, [Validators.required]),
      sportName: new FormControl(null, [Validators.required])
    })
  }

  addReservation(reservation: IndividualReservation) {
    this.reservationService.addReservation(reservation).subscribe(() => {
    });
  }
}
