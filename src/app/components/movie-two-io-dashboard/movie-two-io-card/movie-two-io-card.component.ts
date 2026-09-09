import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Imovies } from 'src/app/model/movie.interface';

@Component({
  selector: 'app-movie-two-io-card',
  templateUrl: './movie-two-io-card.component.html',
  styleUrls: ['./movie-two-io-card.component.scss']
})
export class MovieTwoIoCardComponent implements OnInit {


  @Input() getmovieinfo !: Imovies[]
  @Output() emiteditobj:EventEmitter<Imovies> = new EventEmitter<Imovies>()
  @Output() emitdeleteobj:EventEmitter<number> = new EventEmitter<number>()



  constructor() { }

  ngOnInit(): void {
  }

  onEdit(movie:Imovies){
    this.emiteditobj.emit(movie)
  }

  ondelete(movieID:number){
    this.emitdeleteobj.emit(movieID)
  }
}
