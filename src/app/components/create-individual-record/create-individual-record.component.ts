import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IIndividualRecords } from 'src/app/models/individualRecords';
import { IndividualRecordsService } from 'src/app/services/individual-records.service';
import { IndividualReservationsService } from 'src/app/services/individual-reservations.service';

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

  constructor(private recordService: IndividualRecordsService,
              private reservationService: IndividualReservationsService,
              private datePipe: DatePipe){
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null, [Validators.required]),
    })
  }

  createRecord(id: string) {
    this.recordService.addIndividualRecord(id).subscribe(() => {
    })
  }

  getReservations(date: string) {
    this.reservationService.getReservations(date).subscribe((any) => {
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
