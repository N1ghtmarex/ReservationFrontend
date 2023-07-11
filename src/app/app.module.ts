import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/UI/footer/footer.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { BaseComponent } from './components/base/base.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CreateIndividualReservationComponent } from './components/create-individual-reservation/create-individual-reservation.component';
import { AddSectionReservationComponent } from './components/add-section-reservation/add-section-reservation.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BaseComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CreateIndividualReservationComponent,
    AddSectionReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
