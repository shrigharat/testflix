import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import IMoviePreview from '../models/movie-preview.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl = 'http://www.omdbapi.com/?apikey=' + environment.omdbKey;
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
        return parseInt(a.Year) - parseInt(b.Year);
      });
    } else if (type === 'desc') {
      newMovies = movies.sort((a, b) => {
        return parseInt(b.Year) - parseInt(a.Year);
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
    // console.log('Current search History');
    // console.log(this.searchHistory);
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
}
