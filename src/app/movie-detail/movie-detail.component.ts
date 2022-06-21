import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import IMovie, { defaultMovie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  searchQuery = '';
  loading = false;
  movie: IMovie = defaultMovie;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.fetchMovie();
  }

  async searchFunction(searchString: string) {
    await this.router.navigateByUrl('search/' + searchString + '?page=1&type=all');
  }

  async fetchMovie() {
    this.loading = true;
    const movie = await this.movieService.fetchMovieById(
      this.route.snapshot.params['movieId']
    );
    if (!movie.Poster || movie.Poster === 'N/A') {
      movie.Poster =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png';
    }
    movie.Genre = movie.Genre.split(', ');
    movie.Language = movie.Language.split(', ');
    console.log(this.movie.Genre);
    this.movie = movie;
    this.loading = false;
  }
}
