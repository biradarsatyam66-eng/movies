import { Component, OnInit } from '@angular/core';
import { movieArray } from 'src/app/const/movie';
import { Imovies } from 'src/app/model/movie.interface';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-movie-three-io-dashboard',
  templateUrl: './movie-three-io-dashboard.component.html',
  styleUrls: ['./movie-three-io-dashboard.component.scss']
})
export class MovieThreeIoDashboardComponent implements OnInit {


  movieArr :Imovies[] = []
  editobj !:Imovies

  constructor(private _snackbar:SnackbarService) { }

  ngOnInit(): void {
    this.movieArr = movieArray
  }


  getnewobj(movie:Imovies){
    this.movieArr.unshift(movie)
  }

  geteditobj(movie:Imovies){
    this.editobj = movie
  }

  getupdateobj(movie:Imovies){
    let getindex = this.movieArr.findIndex(i=> i.id === movie.id)
    this.movieArr[getindex] = movie
  }

  getdeleteobj(movieId:number){
    let getconfirm = confirm('WANT TO DELETE')

    if(getconfirm){
      let getindex = this.movieArr.findIndex(i=> i.id === movieId)
      this.movieArr.splice(getindex,1)
      this._snackbar.onShowSnackbar('MOVIE DELETED SUCCESSFULLY !!!')
    }
  }
}
