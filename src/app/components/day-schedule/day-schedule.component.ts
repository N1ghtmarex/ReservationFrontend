import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IIndividualRecords } from 'src/app/models/individualRecords';
import { ISectionReservations } from 'src/app/models/sectionReservations';
import { IndividualRecordsService } from 'src/app/services/individual-records.service';
import { SectionReservationsService } from 'src/app/services/section-reservations.service';

@Component({
  selector: 'app-day-schedule',
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.scss']
})
export class DayScheduleComponent implements OnInit {

  form!: FormGroup
  sectionRecords!: ISectionReservations[]
  individualRecords!: IIndividualRecords[]
  day!: string

  constructor(private sectionReservationService: SectionReservationsService, 
              private ivdividualRecordsService: IndividualRecordsService,
              private datePipe: DatePipe){
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      day: new FormControl(null, [Validators.required])
    })
  }

  getReservations(day: string) {
    this.sectionRecords = []
    this.individualRecords = []
    this.sectionReservationService.getDayReservations(day).subscribe((any) => {
      this.sectionRecords = any.sectionReservation
      console.log(any)
    })
    this.ivdividualRecordsService.getDayRecords(day).subscribe((any) => {
      this.individualRecords = any.individualReservations
      console.log(any)
      for (var item in this.individualRecords){
        this.individualRecords[item].date = this.datePipe.transform(this.individualRecords[item].date, 'HH:mm dd-MM-yyyy')!
        this.individualRecords[item].endDate = this.datePipe.transform(this.individualRecords[item].endDate, 'HH:mm dd-MM-yyyy')!
      }
    })
  }
}
