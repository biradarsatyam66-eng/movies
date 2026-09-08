import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Imovies } from 'src/app/model/movie.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-movie-one-io-form',
  templateUrl: './movie-one-io-form.component.html',
  styleUrls: ['./movie-one-io-form.component.scss']
})
export class MovieOneIoFormComponent implements OnInit,OnChanges {

  @ViewChild('movieform') movieform !: NgForm
  @Output() emitnewmovie : EventEmitter<Imovies> = new EventEmitter<Imovies>()
  @Input() MovieObj !: Imovies
  @Output() emitupdatemovie : EventEmitter<Imovies> = new EventEmitter<Imovies>()


  isineditmode:boolean = false
  isInvalid:boolean = false


  constructor(private _snackbar:SnackbarService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['MovieObj']['currentValue']){
        this.isineditmode = true
        this.movieform.form.patchValue(changes['MovieObj']['currentValue'])
      }
  }

  ngOnInit(): void {
  }

  onAddMovie(){
    if(this.movieform.valid){
      this.isInvalid = false

      let newmovie = {...this.movieform.value,id:Date.now().toString()}
    this.emitnewmovie.emit(newmovie)
    this.movieform.reset()
    this._snackbar.onShowSnackbar('NEW MOVIE ADDED SUCCESSFULLY!!!')
    }else{
      this.isInvalid = true
    }
  }

  onUpdate(){
    if(this.movieform.valid){
      this.isInvalid = false

      let updatemovie = {...this.movieform.value,id:this.MovieObj.id}
    this.emitupdatemovie.emit(updatemovie)
    this.isineditmode = false
    this.movieform.reset()
    this._snackbar.onShowSnackbar('MOVIE UPDATED SUCCESSFULLY!!!')
    }else{
      this.isInvalid = true
    }
  }
}
