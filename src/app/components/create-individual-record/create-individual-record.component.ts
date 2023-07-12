import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IndividualRecordsService } from 'src/app/services/individual-records.service';

@Component({
  selector: 'app-create-individual-record',
  templateUrl: './create-individual-record.component.html',
  styleUrls: ['./create-individual-record.component.scss']
})
export class CreateIndividualRecordComponent implements OnInit {
  form!: FormGroup
  
  id!: string

  constructor(private recordService: IndividualRecordsService){
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
}
