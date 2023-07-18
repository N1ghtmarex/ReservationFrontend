import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/UI/footer/footer.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { BaseComponent } from './components/base/base.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CreateIndividualReservationComponent } from './components/create-individual-reservation/create-individual-reservation.component';
import { AddSectionReservationComponent } from './components/add-section-reservation/add-section-reservation.component';
import { WeekScheduleComponent } from './components/week-schedule/week-schedule.component';
import { CreateIndividualRecordComponent } from './components/create-individual-record/create-individual-record.component';
import { DayScheduleComponent } from './components/day-schedule/day-schedule.component';
import { DatePipe } from '@angular/common';
import { AddSectionComponent } from './components/add-section/add-section.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { RecordDialogComponent } from './components/record-dialog/record-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddToSectionComponent } from './components/add-to-section/add-to-section.component';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BaseComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CreateIndividualReservationComponent,
    AddSectionReservationComponent,
    WeekScheduleComponent,
    CreateIndividualRecordComponent,
    DayScheduleComponent,
    AddSectionComponent,
    RecordDialogComponent,
    AddToSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FullCalendarModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
