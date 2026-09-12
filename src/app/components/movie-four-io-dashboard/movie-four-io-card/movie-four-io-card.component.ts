import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from 'src/app/model/movie.interface';

@Component({
  selector: 'app-movie-four-io-card',
  templateUrl: './movie-four-io-card.component.html',
  styleUrls: ['./movie-four-io-card.component.scss']
})
export class MovieFourIoCardComponent implements OnInit {

  @Input() getmoviedata !: Imovies

  constructor() { }

  ngOnInit(): void {
  }

}
