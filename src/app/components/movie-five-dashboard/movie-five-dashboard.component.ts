import { Component, OnInit } from '@angular/core';
import { movieArray } from 'src/app/const/movie';
import { Imovies } from 'src/app/model/movie.interface';

@Component({
  selector: 'app-movie-five-dashboard',
  templateUrl: './movie-five-dashboard.component.html',
  styleUrls: ['./movie-five-dashboard.component.scss']
})
export class MovieFiveDashboardComponent implements OnInit {


  movieArr :Imovies[]= []

  constructor() { }

  ngOnInit(): void {
    this.movieArr = movieArray
  }

  getdeleteobj(id:number){
    let getindex = this.movieArr.findIndex(i=>i.id === id)
    this.movieArr.splice(getindex,1)
  }

}
