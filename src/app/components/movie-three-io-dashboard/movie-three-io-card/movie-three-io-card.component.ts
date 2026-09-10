import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Imovies } from 'src/app/model/movie.interface';

@Component({
  selector: 'app-movie-three-io-card',
  templateUrl: './movie-three-io-card.component.html',
  styleUrls: ['./movie-three-io-card.component.scss']
})
export class MovieThreeIoCardComponent implements OnInit {

  @Input() getmovieinfo !: Imovies[]
  @Output() emiteditobj:EventEmitter<Imovies> = new EventEmitter<Imovies>()
  @Output() emitdeleteobj:EventEmitter<number> = new EventEmitter<number>()


  constructor() { }

  ngOnInit(): void {
  }

  onedit(movie:Imovies){
    this.emiteditobj.emit(movie)
  }

  ondelete(movieId:number){
    this.emitdeleteobj.emit(movieId)
  }
}
