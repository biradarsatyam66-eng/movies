import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Imovies } from 'src/app/model/movie.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-movie-five-form',
  templateUrl: './movie-five-form.component.html',
  styleUrls: ['./movie-five-form.component.scss']
})
export class MovieFiveFormComponent implements OnInit,OnChanges {

  @ViewChild('movieform') movieform !: NgForm
  @Output() emitnewmovie = new EventEmitter<Imovies>()
  @Input() EditObj !: Imovies
  @Output() emitupdatemovie = new EventEmitter<Imovies>()


  isineditmode:boolean = false

  constructor(private _snackbar:SnackbarService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['EditObj']['currentValue']){
        this.isineditmode = true
        this.movieform.form.patchValue(changes['EditObj']['currentValue'])
      }
  }

  ngOnInit(): void {
  }

  onAddMovie(){
    let newmovie = {...this.movieform.value,id:Date.now()}
    this.emitnewmovie.emit(newmovie)
    this.movieform.reset()
    this._snackbar.onShowSnackbar('NEW MOVIE ADDED SUCCESSFULLY!!!!')
  }

  onUpdate(){
    this.isineditmode = false

    let updatemovie = {...this.movieform.value,id:this.EditObj.id}
    this.emitupdatemovie.emit(updatemovie)
    this.movieform.reset()
    this._snackbar.onShowSnackbar('MOVIE UPDATED SUCCESSFULLY!!!!')
  }

}
