import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Calendar } from 'fullcalendar';
import { IIndividualRecords } from 'src/app/models/individualRecords';
import { ISectionReservations } from 'src/app/models/sectionReservations';
import { IndividualRecordsService } from 'src/app/services/individual-records.service';
import { SectionReservationsService } from 'src/app/services/section-reservations.service';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

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

    let calendarEl: HTMLElement = document.getElementById('calendar')!;

    let initialDate = this.day.split('-', 3)

    let dayOfWeek = new Date(initialDate[2] + '-' + initialDate[1] + '-' + initialDate[0]).getDay()

    if (dayOfWeek == 0){
      dayOfWeek = 7
    } 

    let calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin, timeGridPlugin ],
      initialView: 'timeGridWeek',
      initialDate: initialDate[2] + '-' + initialDate[1] + '-' + initialDate[0],
      firstDay: dayOfWeek,
      headerToolbar: false,
      slotLabelFormat: {
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
          hourCycle: 'h23'
      },
      eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        meridiem: false,
        hourCycle: 'h23'
      },
      locale: 'ru-RU',
      slotMinTime: '8:00',
      height: 'auto',
      allDaySlot: false,
      eventClick: function(info) {
        console.log(info.event.id)
      }
    });

    this.sectionReservationService.getWeekReservations(day).subscribe((any) => {
      this.sectionRecords = any.sectionReservation;
      if (this.sectionRecords){
        for (var item in this.sectionRecords) {
          calendar.addEvent({
            title: 'Занятие секции: ' + this.sectionRecords[item].section.name,
            daysOfWeek: [this.sectionRecords[item].dayOfWeek],
            startTime: this.sectionRecords[item].startTime,
            endTime: this.sectionRecords[item].endTime
          })
        }
      }
      calendar.render()
    })

    this.individualReservationService.getWeekRecords(day).subscribe((any) => {
      this.individualRecords = any.individualReservations;

      if(this.individualRecords){
        for (var item in this.individualRecords){
          this.individualRecords[item].date = this.datePipe.transform(this.individualRecords[item].date, 'HH:mm dd-MM-yyyy')!
          this.individualRecords[item].endDate = this.datePipe.transform(this.individualRecords[item].endDate, 'HH:mm dd-MM-yyyy')!

          console.log(this.individualRecords[item])
          
          let splittedStartDate = this.individualRecords[item].date.split(' ', 2)
          let splittedStartDateOnly = splittedStartDate[1].split('-', 3)
  
          let splittedEndDate = this.individualRecords[item].endDate.split(' ', 2)
          let splittedEndDateOnly = splittedEndDate[1].split('-', 3)
  
          calendar.addEvent({
            id: this.individualRecords[item].id,
            title: 'Индивидуальное занятие',
            start:  splittedStartDateOnly[2] + '-' + splittedStartDateOnly[1] + '-' + splittedStartDateOnly[0] + ' ' + splittedStartDate[0],
            end: splittedEndDateOnly[2] + '-' + splittedEndDateOnly[1] + '-' + splittedEndDateOnly[0] + ' ' + splittedEndDate[0],
            allDay: false,
          })
          
        }
        calendar.render()
      }
    })
  }

  print(string: string) {
    console.log(string)
  }
}
