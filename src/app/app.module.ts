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



@NgModule({
  declarations: [
    AppComponent,
    MovieOneIoDashboardComponent,
    MovieOneIoFormComponent,
    MovieOneIoCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
