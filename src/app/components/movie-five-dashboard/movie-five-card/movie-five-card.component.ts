import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Imovies } from 'src/app/model/movie.interface';

@Component({
  selector: 'app-movie-five-card',
  templateUrl: './movie-five-card.component.html',
  styleUrls: ['./movie-five-card.component.scss']
})
export class MovieFiveCardComponent implements OnInit {

  @Input() getmovie !: Imovies
  @Output() emitdeleteobj : EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }


  ondelete(id:number){
    this.emitdeleteobj.emit(id)
  }
}
