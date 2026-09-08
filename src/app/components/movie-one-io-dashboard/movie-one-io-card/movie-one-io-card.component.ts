import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Imovies } from 'src/app/model/movie.interface';

@Component({
  selector: 'app-movie-one-io-card',
  templateUrl: './movie-one-io-card.component.html',
  styleUrls: ['./movie-one-io-card.component.scss']
})
export class MovieOneIoCardComponent implements OnInit {

  @Input() getmovieinfo !: Imovies[]
  @Output() emiteditobj : EventEmitter<Imovies> = new EventEmitter<Imovies>()
  @Output() emitdeleteobj : EventEmitter<number> = new EventEmitter<number>()


  constructor() { }

  ngOnInit(): void {
  }

  onedit(movie:Imovies){
    this.emiteditobj.emit(movie)
  }

  ondelete(movieID:number){
    this.emitdeleteobj.emit(movieID)
  }

}
