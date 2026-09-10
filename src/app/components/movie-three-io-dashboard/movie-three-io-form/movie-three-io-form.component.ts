import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Imovies } from 'src/app/model/movie.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-movie-three-io-form',
  templateUrl: './movie-three-io-form.component.html',
  styleUrls: ['./movie-three-io-form.component.scss']
})
export class MovieThreeIoFormComponent implements OnInit,OnChanges {

  @ViewChild('movieform') movieform !: NgForm
  @Output() emitnewobj:EventEmitter<Imovies> = new EventEmitter<Imovies>()
  @Input() EditObj !: Imovies
  @Output() emitupdateobj = new EventEmitter<Imovies>()


  isInEditMode:boolean = false
  isvalid :boolean = false

  constructor(private _snackbar:SnackbarService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['EditObj']['currentValue']){
        this.isInEditMode = true
        this.movieform.form.patchValue(changes['EditObj']['currentValue'])
      }
  }


  ngOnInit(): void {
  }

  onAddMovie(){
    if(this.movieform.valid){
      this.isvalid = false

      let newobj:Imovies = {...this.movieform.value,id:Date.now()}
      this.emitnewobj.emit(newobj)
      this.movieform.reset()
      this._snackbar.onShowSnackbar(`NEW MOVIE WITH ID ${newobj.id} IS ADDED SUCCESSFULLY!!!`)
    }else{
      this.isvalid = true
    }
  }

  onUpdate(){
    if(this.movieform.valid){
      this.isvalid = false

      let updateobj:Imovies = {...this.movieform.value,id:this.EditObj.id}
      this.emitupdateobj.emit(updateobj)
      this.movieform.reset()
      this._snackbar.onShowSnackbar(`MOVIE WITH ID ${updateobj.id} IS UPDATED SUCCESSFULLY!!!`)
      this.isInEditMode = false
    }else{
      this.isvalid = true
    }
  }

}
