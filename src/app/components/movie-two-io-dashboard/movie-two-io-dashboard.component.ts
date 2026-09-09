import { Component, OnInit } from '@angular/core';
import { movieArray } from 'src/app/const/movie';
import { Imovies } from 'src/app/model/movie.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-movie-two-io-dashboard',
  templateUrl: './movie-two-io-dashboard.component.html',
  styleUrls: ['./movie-two-io-dashboard.component.scss']
})
export class MovieTwoIoDashboardComponent implements OnInit {


  moviearr:Imovies[] = []
  editobj !: Imovies

  constructor(private _snackbar:SnackbarService) { }

  ngOnInit(): void {
    this.moviearr = movieArray
  }

  getnewobj(movie:Imovies){
    this.moviearr.unshift(movie)
  }

  geteditobj(movie:Imovies){
    this.editobj = movie
  }

  getupdateobj(movie:Imovies){
    let getindex = this.moviearr.findIndex(i=>i.id === movie.id)
    this.moviearr[getindex] = movie
  }

  getdeleteobj(movieId:number){
    let getconfirm = confirm('WANT TO DELETE MOVIE !!!')

    if(getconfirm){
      let getindex = this.moviearr.findIndex(i=>i.id === movieId)
      this.moviearr.splice(getindex,1)
      this._snackbar.onShowSnackbar('MOVIE DELETED SUCCESSFULLY !!!')
    }
  }
}
