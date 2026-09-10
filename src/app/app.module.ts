import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieOneIoDashboardComponent } from './components/movie-one-io-dashboard/movie-one-io-dashboard.component';
import { MovieOneIoFormComponent } from './components/movie-one-io-dashboard/movie-one-io-form/movie-one-io-form.component';
import { MovieOneIoCardComponent } from './components/movie-one-io-dashboard/movie-one-io-card/movie-one-io-card.component';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


import { MovieTwoIoDashboardComponent } from './components/movie-two-io-dashboard/movie-two-io-dashboard.component';
import { MovieTwoIoFormComponent } from './components/movie-two-io-dashboard/movie-two-io-form/movie-two-io-form.component';
import { MovieTwoIoCardComponent } from './components/movie-two-io-dashboard/movie-two-io-card/movie-two-io-card.component';
import { MovieThreeIoDashboardComponent } from './components/movie-three-io-dashboard/movie-three-io-dashboard.component';
import { MovieThreeIoFormComponent } from './components/movie-three-io-dashboard/movie-three-io-form/movie-three-io-form.component';
import { MovieThreeIoCardComponent } from './components/movie-three-io-dashboard/movie-three-io-card/movie-three-io-card.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieOneIoDashboardComponent,
    MovieOneIoFormComponent,
    MovieOneIoCardComponent,
    MovieTwoIoDashboardComponent,
    MovieTwoIoFormComponent,
    MovieTwoIoCardComponent,
    MovieThreeIoDashboardComponent,
    MovieThreeIoFormComponent,
    MovieThreeIoCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
