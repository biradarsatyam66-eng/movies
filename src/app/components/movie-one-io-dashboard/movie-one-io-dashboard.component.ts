import { Component, OnInit } from '@angular/core';
import { movieArray } from 'src/app/const/movie';
import { Imovies } from 'src/app/model/movie.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-movie-one-io-dashboard',
  templateUrl: './movie-one-io-dashboard.component.html',
  styleUrls: ['./movie-one-io-dashboard.component.scss']
})
export class MovieOneIoDashboardComponent implements OnInit {


  moviearr:Imovies[] = []
  movieobj !: Imovies

  constructor(private _snackbar : SnackbarService) { }

  ngOnInit(): void {
    this.moviearr = movieArray
  }

  getnewmovie(movie:Imovies){
    this.moviearr.unshift(movie)
  }

  geteditobj(movie:Imovies){
    this.movieobj = movie
  }

  getupdateobj(movie:Imovies){
    let getindex = this.moviearr.findIndex(i=>i.id === movie.id)
    this.moviearr[getindex] = movie
  }

  getdeleteobj(movieId:number){
    let getindex = this.moviearr.findIndex(i=>i.id === movieId)
    this.moviearr.splice(getindex,1)
    this._snackbar.onShowSnackbar('MOVIE DELETED SUCCESSFULLY !!!')
  }
}
