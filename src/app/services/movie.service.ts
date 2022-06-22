import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import IMoviePreview from '../models/movie-preview.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl = 'https://www.omdbapi.com/?apikey=' + environment.omdbKey;
  searchHistory: string[] = [];

  constructor() {
    let searchHistory = localStorage.getItem('searchHistory');
    if (searchHistory) {
      this.searchHistory = JSON.parse(searchHistory);
    }
  }

  sortMovies(movies: IMoviePreview[], type: string): IMoviePreview[] {
    let newMovies: IMoviePreview[] = [];
    if (type === 'asc') {
      newMovies = movies.sort((a, b) => {
        return parseInt(a.year) - parseInt(b.year);
      });
    } else if (type === 'desc') {
      newMovies = movies.sort((a, b) => {
        return parseInt(b.year) - parseInt(a.year);
      });
    }
    return movies;
  }

  //update the history object in local storage
  updateLSSearchHistory() {
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
  }

  addToSearchHistory(newSearchString: string) {
    if (this.searchHistory.length >= 5) {
      this.searchHistory.pop();
    }
    this.searchHistory.unshift(newSearchString);
    this.searchHistory = [...new Set(this.searchHistory)];
    this.updateLSSearchHistory();
  }

  removeSearchHistory(searchString: string) {
    this.searchHistory = this.searchHistory.filter((e) => e != searchString);
    this.updateLSSearchHistory();
  }

  async fetchMovies(
    searchString: string,
    pageNumber: number,
    resultType: string
  ) {
    this.addToSearchHistory(searchString);
    let urlStr = this.baseUrl + '&s=' + searchString + '&page=' + pageNumber;
    if (resultType != 'all') {
      urlStr += '&type=' + resultType;
    }
    const res = await fetch(urlStr);
    // const res = await fetch('data/dummy-movie.json');
    const data = await res.json();
    return data;
  }

  async fetchMovieById(id: string) {
    const res = await fetch(this.baseUrl + '&i=' + id);
    const data = await res.json();
    return data;
  }

  transformMoviePreviewFields(data: any) {
    return {
      ...data,
      title: data?.Title,
      poster: data?.Poster,
      year: data?.Year,
      type: data?.Type,
    };
  }

  transformMoviePreviewArray(movies: any) {
    let newMovies = [];
    for (let i = 0; i < movies.length; i++) {
      newMovies.push(this.transformMoviePreviewFields(movies[i]));
    }
    return newMovies;
  }

  transformMovieFields(data: any) {
    return {
      title: data?.Title,
      year: data?.Year,
      rated: data?.Rated,
      released: data?.Released,
      runtime: data?.Runtime,
      genre: data?.Genre,
      director: data?.Director,
      writer: data?.Writer,
      actors: data?.Actors,
      plot: data?.Plot,
      language: data?.Language,
      country: data?.Country,
      poster: data?.Poster,
      imdbRating: data?.imdbRating,
      imdbVotes: data?.imdbVotes,
      imdbID: data?.imdbID,
      type: data?.Type,
    };
  }
}
