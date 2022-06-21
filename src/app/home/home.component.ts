import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private movie: MovieService, public router: Router) {}

  ngOnInit(): void {}

  async searchMovies(searchQuery: string) {
    // console.log('Search string is: ' + this.query);
    // let movies = await this.movie.fetchMovies(this.query);
    // return false;
    console.log(searchQuery);
    await this.router.navigateByUrl(
      'search/' + searchQuery + '?page=1&type=all'
    );
    return false;
  }
}
