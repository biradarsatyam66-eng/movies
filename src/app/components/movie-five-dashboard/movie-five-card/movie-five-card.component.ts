import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Imovies } from 'src/app/model/movie.interface';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-movie-five-card',
  templateUrl: './movie-five-card.component.html',
  styleUrls: ['./movie-five-card.component.scss']
})
export class MovieFiveCardComponent implements OnInit {

  @Input() getmovie !: Imovies
  @Output() emitdeleteobj : EventEmitter<number> = new EventEmitter<number>()
  @Output() emiteditmovie = new EventEmitter<Imovies>()

  constructor(private _matdialod:MatDialog) { }

  ngOnInit(): void {
  }

  ondelete(id:number){
    let confi = new MatDialogConfig()
    confi.disableClose = true
    confi.data='WANT TO DELETED THIS MOVIE'
    confi.width='800px'

    let matRef =  this._matdialod.open(GetconfirmComponent,confi)

    matRef.afterClosed()
    .subscribe({
      next:res=>{
        if(res){
          this.emitdeleteobj.emit(id)
        }
      }
    })
  }

  // this.emitdeleteobj.emit(id)

  onedit(movie:Imovies){
    this.emiteditmovie.emit(movie)
  }
}