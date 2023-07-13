import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IIndividualRecords } from 'src/app/models/individualRecords';
import { ISport } from 'src/app/models/sport';
import { IndividualRecordsService } from 'src/app/services/individual-records.service';
import { IndividualReservationsService } from 'src/app/services/individual-reservations.service';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-create-individual-record',
  templateUrl: './create-individual-record.component.html',
  styleUrls: ['./create-individual-record.component.scss']
})
export class CreateIndividualRecordComponent implements OnInit {
  form!: FormGroup
  reservations!: IIndividualRecords[]
  id!: string
  date!: string
  time!: string
  sports!: ISport[]
  sportId!: string

  constructor(private recordService: IndividualRecordsService,
              private reservationService: IndividualReservationsService,
              private datePipe: DatePipe,
              private sportService: SportsService){
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null, [Validators.required]),
    })
    this.getSports()
  }

  createRecord(id: string) {
    this.recordService.addIndividualRecord(id).subscribe(() => {
    })
  }

  getSports() {
    this.sportService.getSports().subscribe((any) => {
      this.sports = any.sports
    })
  }

  getReservations(date: string, time: string, sportId: string) {
    this.reservations = []
    this.reservationService.getReservations(date, time, sportId).subscribe((any) => {
      this.reservations = any.individualReservations

      if(this.reservations){
        for (var item in this.reservations){
          this.reservations[item].date = this.datePipe.transform(this.reservations[item].date, 'HH:mm dd-MM-yyyy')!
          this.reservations[item].endDate = this.datePipe.transform(this.reservations[item].endDate, 'HH:mm dd-MM-yyyy')!
        }
      }
    })
  }
}
