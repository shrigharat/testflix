import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl = 'http://www.omdbapi.com/?apikey=' + environment.omdbKey;

  constructor() {}

  async fetchMovies(searchString: string) {
    const res = await fetch(this.baseUrl + '&s=' + searchString);
    // const res = await fetch('data/dummy-movie.json');
    const data = await res.json();
    return data['Search'];
  }

  async fetchMovieById(id: string) {
    const res = await fetch(this.baseUrl + '&i=' + id);
    const data = await res.json();
    return data;
  }
}
