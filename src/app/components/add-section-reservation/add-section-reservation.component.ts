import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SectionReservation } from 'src/app/models/addSectionReservationDto';
import { ISection } from 'src/app/models/section';
import { SectionReservationsService } from 'src/app/services/section-reservations.service';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  selector: 'app-add-section-reservation',
  templateUrl: './add-section-reservation.component.html',
  styleUrls: ['./add-section-reservation.component.scss']
})
export class AddSectionReservationComponent implements OnInit {
  form!: FormGroup

  sections!: ISection[]
  reservation = new SectionReservation();

  constructor(private reservationService: SectionReservationsService,
              private sectionService: SectionsService){
  }

  ngOnInit(): void {
    this.getSections()
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

  getSections() {
    this.sectionService.getSection().subscribe((any) => {
      this.sections = any.sections
    })
  }
}
