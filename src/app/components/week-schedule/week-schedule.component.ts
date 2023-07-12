import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IIndividualRecords } from 'src/app/models/individualRecords';
import { ISectionReservations } from 'src/app/models/sectionReservations';
import { IndividualRecordsService } from 'src/app/services/individual-records.service';
import { SectionReservationsService } from 'src/app/services/section-reservations.service';

@Component({
  selector: 'app-week-schedule',
  templateUrl: './week-schedule.component.html',
  styleUrls: ['./week-schedule.component.scss']
})
export class WeekScheduleComponent implements OnInit {
  form!: FormGroup

  day!: string;

  individualRecords!: IIndividualRecords[];
  sectionRecords!: ISectionReservations[];

  constructor(private sectionReservationService: SectionReservationsService,
              private individualReservationService: IndividualRecordsService,
              private datePipe: DatePipe){
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      day: new FormControl(null, [Validators.required])
    })
  }

  getReservations(day: string) {
    this.individualRecords = []
    this.sectionRecords = []

    this.sectionReservationService.getWeekReservations(day).subscribe((any) => {
      this.sectionRecords = any.sectionReservation;
    })
    this.individualReservationService.getWeekRecords(day).subscribe((any) => {
      this.individualRecords = any.individualReservations;
      
      for (var item in this.individualRecords){
        this.individualRecords[item].date = this.datePipe.transform(this.individualRecords[item].date, 'HH:mm dd-MM-yyyy')!
        this.individualRecords[item].endDate = this.datePipe.transform(this.individualRecords[item].endDate, 'HH:mm dd-MM-yyyy')!
      }
    })
  }

  print(string: string) {
    console.log(string)
  }
}
