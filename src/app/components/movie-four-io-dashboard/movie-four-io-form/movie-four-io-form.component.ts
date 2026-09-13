import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Imovies } from 'src/app/model/movie.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-movie-four-io-form',
  templateUrl: './movie-four-io-form.component.html',
  styleUrls: ['./movie-four-io-form.component.scss']
})
export class MovieFourIoFormComponent implements OnInit,OnChanges {

  @ViewChild('movieform') movieform !: NgForm
  @Output() emitnewonj = new EventEmitter<Imovies>()
  @Input() EditObj !: Imovies
  @Output() emitupdateonj = new EventEmitter<Imovies>()



  isineditmode : boolean = false
  isinvalid : boolean = false

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
    let new_obj:Imovies = {...this.movieform.value,id:Date.now()}
    this.emitnewonj.emit(new_obj)
    this.movieform.reset()
    this._snackbar.onShowSnackbar('NEW MOVIE ADDED SUCCESSFULLY!!')
  }

  onupdate(){
    let update_obj:Imovies = {...this.movieform.value,id:this.EditObj.id}
    this.emitupdateonj.emit(update_obj)
    this.movieform.reset()
    this._snackbar.onShowSnackbar('MOVIE UPDATED SUCCESSFULLY!!')
    this.isineditmode = false
  }

}
