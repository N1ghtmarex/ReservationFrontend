import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetWeekSectionReservations } from 'src/app/models/getWeekSectionReservationsDto';
import { SectionReservationsService } from 'src/app/services/section-reservations.service';

@Component({
  selector: 'app-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.scss']
})
export class WeekScheduleComponent implements OnInit {
  form!: FormGroup

  query = new GetWeekSectionReservations();

  constructor(private reservationService: SectionReservationsService){

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      day: new FormControl(null, [Validators.required])
    })
  }

  getReservations(query: GetWeekSectionReservations) {
    this.reservationService.getReservations(query).subscribe((any) => {
      console.log(any)
    })
  }
}
