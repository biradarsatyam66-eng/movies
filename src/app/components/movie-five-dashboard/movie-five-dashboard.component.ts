import { Component, OnInit } from '@angular/core';
import { movieArray } from 'src/app/const/movie';
import { Imovies } from 'src/app/model/movie.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-movie-five-dashboard',
  templateUrl: './movie-five-dashboard.component.html',
  styleUrls: ['./movie-five-dashboard.component.scss']
})
export class MovieFiveDashboardComponent implements OnInit {


  movieArr :Imovies[]= []
  editobj!:Imovies

  constructor(private _snackbar:SnackbarService) { }

  ngOnInit(): void {
    this.movieArr = movieArray
  }

  getdeleteobj(id:number){
    let getindex = this.movieArr.findIndex(i=>i.id === id)
    this.movieArr.splice(getindex,1)
    this._snackbar.onShowSnackbar('MOVIE DELETED SUCCESSFULLY!!!!')
  }

  getnewmovie(movie:Imovies){
    this.movieArr.unshift(movie)
  }

  geteditobj(movie:Imovies){
    this.editobj = movie
  }

  getupdatemovie(movie:Imovies){
    let getindex = this.movieArr.findIndex(i=>i.id === movie.id)
    this.movieArr[getindex] = movie
  }

}
