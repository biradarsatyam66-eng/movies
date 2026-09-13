import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Imovies } from 'src/app/model/movie.interface';

@Component({
  selector: 'app-movie-four-io-card',
  templateUrl: './movie-four-io-card.component.html',
  styleUrls: ['./movie-four-io-card.component.scss']
})
export class MovieFourIoCardComponent implements OnInit {

  @Input() getmoviedata !: Imovies
  @Output() emiteditobj = new EventEmitter<Imovies>()
  @Output() emitdeleteobj = new EventEmitter<number>()

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
