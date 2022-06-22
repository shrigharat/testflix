import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import IMovie, { defaultMovie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  searchQuery = '';
  loading = false;
  movie: IMovie = defaultMovie;
  NOT_FOUND_IMG_URL =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png';

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.fetchMovie();
  }

  //redirect to search page
  async searchFunction(searchString: string) {
    await this.router.navigateByUrl(
      'search/' + searchString + '?page=1&type=all'
    );
  }

  //transform fields
  updateMovieFields(movie: any) {
    let newMovie = { ...movie };
    if (!newMovie.poster || newMovie.poster === 'N/A') {
      newMovie.poster = this.NOT_FOUND_IMG_URL;
    }
    newMovie.genre = newMovie.genre.split(', ');
    newMovie.language = newMovie.language.split(', ');
    return newMovie;
  }

  async fetchMovie() {
    this.loading = true;
    try {
      let movie = await this.movieService.fetchMovieById(
        this.route.snapshot.params['movieId']
      );
      if (!movie) {
        this.loading = false;
        return;
      }
      movie = this.movieService.transformMovieFields(movie);
      console.log('Movie details');
      console.log({movie});
      this.movie = this.updateMovieFields(movie);
      this.loading = false;
    } catch (e) {
      this.loading = false;
    }
  }
}
