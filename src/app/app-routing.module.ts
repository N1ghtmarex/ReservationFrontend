import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base.component'
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CreateIndividualReservationComponent } from './components/create-individual-reservation/create-individual-reservation.component';
import { AddSectionReservationComponent } from './components/add-section-reservation/add-section-reservation.component';
import { WeekScheduleComponent } from './components/week-schedule/week-schedule.component';
import { CreateIndividualRecordComponent } from './components/create-individual-record/create-individual-record.component';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'auth', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'add-individual-reservation', component: CreateIndividualReservationComponent},
  {path: 'add-section-reservation', component: AddSectionReservationComponent},
  {path: 'week-schedule', component: WeekScheduleComponent},
  {path: 'create-individual-record', component: CreateIndividualRecordComponent},
  {path: '**', redirectTo: '', component: BaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
