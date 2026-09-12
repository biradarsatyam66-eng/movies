import { Component, OnInit } from '@angular/core';
import { movieArray } from 'src/app/const/movie';
import { Imovies } from 'src/app/model/movie.interface';

@Component({
  selector: 'app-movie-four-io-dashboard',
  templateUrl: './movie-four-io-dashboard.component.html',
  styleUrls: ['./movie-four-io-dashboard.component.scss']
})
export class MovieFourIoDashboardComponent implements OnInit {


  movieArr:Imovies[] = []

  constructor() { }

  ngOnInit(): void {
    this.movieArr = movieArray
  }

}
