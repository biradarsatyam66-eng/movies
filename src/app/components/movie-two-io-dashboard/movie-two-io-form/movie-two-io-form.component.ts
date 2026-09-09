import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Imovies } from 'src/app/model/movie.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-movie-two-io-form',
  templateUrl: './movie-two-io-form.component.html',
  styleUrls: ['./movie-two-io-form.component.scss']
})
export class MovieTwoIoFormComponent implements OnInit,OnChanges {

  @ViewChild('movieform') movieform !: NgForm
  @Output() emitnewobj:EventEmitter<Imovies> = new EventEmitter<Imovies>()
  @Input() MovieObj !: Imovies
  @Output() emitupdateobj:EventEmitter<Imovies> = new EventEmitter<Imovies>()



  isineditmode:boolean = false
  isvalid:boolean = false


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
      this.isvalid = false

      let newobj :Imovies= {...this.movieform.value,id:Date.now()}
      this.emitnewobj.emit(newobj)
      this.movieform.reset()
      this._snackbar.onShowSnackbar('NEW MOVIE ADDED SUCCESSFULLY!!!')
    }else{
      this.isvalid = true
    }
  }

  onUpdatemovie(){
    if(this.movieform.valid){
      this.isvalid = false

      let updateobj :Imovies= {...this.movieform.value,id:this.MovieObj.id}
      this.emitupdateobj.emit(updateobj)
      this.movieform.reset()
      this._snackbar.onShowSnackbar('MOVIE UPDATED SUCCESSFULLY!!!')
      this.isineditmode = false
    }else{
      this.isvalid = true
    }
  }

}
