import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import IMovie from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  searchQuery = '';
  loading = false;
  movie: IMovie = {
    Title: 'The Social Network',
    Year: '2010',
    Rated: 'PG-13',
    Released: '01 Oct 2010',
    Runtime: '120 min',
    Genre: 'Biography, Drama',
    Director: 'David Fincher',
    Writer: 'Aaron Sorkin, Ben Mezrich',
    Actors: 'Jesse Eisenberg, Andrew Garfield, Justin Timberlake',
    Plot: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.',
    Language: 'English, French',
    Country: 'United States',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    imdbRating: '7.8',
    imdbVotes: '684,190',
    imdbID: 'tt1285016',
    Type: 'movie',
  };

  constructor(public router: Router, public route: ActivatedRoute, public movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchMovie();
  }

  searchFunction(searchString: string) {
    this.router.navigateByUrl('/' + searchString);
  }

  async fetchMovie() {
    this.loading = true;
    const movie = await this.movieService.fetchMovieById(this.route.snapshot.params['movieId']);
    this.movie = movie;
    this.loading = false;
    console.log(this.movie.Genre);
    this.movie.Genre = movie.Genre.split(", ");
  }
}
