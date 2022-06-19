import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import IMoviePreview from '../models/movie-preview.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.css'],
})
export class MovieResultsComponent implements OnInit {
  searchQuery = '';
  movieResults: IMoviePreview[] = [
    {
      Title: 'Italian Spiderman',
      Year: '2007',
      imdbID: 'tt2705436',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg',
    },

    {
      Title: 'Superman, Spiderman or Batman',
      Year: '2011',
      imdbID: 'tt2084949',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg',
    },

    {
      Title: 'Spiderman',
      Year: '1990',
      imdbID: 'tt0100669',
      Type: 'movie',
      Poster: 'N/A',
    },

    {
      Title: 'Spiderman',
      Year: '2010',
      imdbID: 'tt1785572',
      Type: 'movie',
      Poster: 'N/A',
    },

    {
      Title: 'Spiderman and Grandma',
      Year: '2009',
      imdbID: 'tt1433184',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg',
    },

    {
      Title: 'Fighting, Flying and Driving: The Stunts of Spiderman 3',
      Year: '2007',
      imdbID: 'tt1132238',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg',
    },

    {
      Title: 'The Amazing Spiderman T4 Premiere Special',
      Year: '2012',
      imdbID: 'tt2233044',
      Type: 'movie',
      Poster: 'N/A',
    },

    {
      Title: 'Spiderman in Cannes',
      Year: '2016',
      imdbID: 'tt5978586',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg',
    },

    {
      Title: 'Amazing Spiderman Syndrome',
      Year: '2012',
      imdbID: 'tt2586634',
      Type: 'movie',
      Poster: 'N/A',
    },

    {
      Title: "Hollywood's Master Storytellers: Spiderman Live",
      Year: '2006',
      imdbID: 'tt2158533',
      Type: 'movie',
      Poster: 'N/A',
    },
  ];
  loading = true;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public movieService: MovieService
  ) {
    // console.log(
    //   'Movie results page constructor : ',
    //   route.snapshot.params['query']
    // );
    // this.searchQuery = route.snapshot.params['query'];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.searchQuery = params['query'];
      this.searchFunction(this.searchQuery);
    });
  }

  async searchFunction(searchString: string) {
    this.loading = true;
    if (searchString) {
      // this.movieResults = await this.movieService.fetchMovies(searchString);
    }
    // this.route.snapshot.params['query'] = searchString;
    console.log('Movie results : ', this.movieResults);
    this.loading = false;
  }

  movies = {
    Search: [
      {
        Title: 'Italian Spiderman',
        Year: '2007',
        imdbID: 'tt2705436',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg',
      },

      {
        Title: 'Superman, Spiderman or Batman',
        Year: '2011',
        imdbID: 'tt2084949',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg',
      },

      {
        Title: 'Spiderman',
        Year: '1990',
        imdbID: 'tt0100669',
        Type: 'movie',
        Poster: 'N/A',
      },

      {
        Title: 'Spiderman',
        Year: '2010',
        imdbID: 'tt1785572',
        Type: 'movie',
        Poster: 'N/A',
      },

      {
        Title: 'Spiderman and Grandma',
        Year: '2009',
        imdbID: 'tt1433184',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg',
      },

      {
        Title: 'Fighting, Flying and Driving: The Stunts of Spiderman 3',
        Year: '2007',
        imdbID: 'tt1132238',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg',
      },

      {
        Title: 'The Amazing Spiderman T4 Premiere Special',
        Year: '2012',
        imdbID: 'tt2233044',
        Type: 'movie',
        Poster: 'N/A',
      },

      {
        Title: 'Spiderman in Cannes',
        Year: '2016',
        imdbID: 'tt5978586',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg',
      },

      {
        Title: 'Amazing Spiderman Syndrome',
        Year: '2012',
        imdbID: 'tt2586634',
        Type: 'movie',
        Poster: 'N/A',
      },

      {
        Title: "Hollywood's Master Storytellers: Spiderman Live",
        Year: '2006',
        imdbID: 'tt2158533',
        Type: 'movie',
        Poster: 'N/A',
      },
    ],
    totalResults: '24',
    Response: 'True',
  };
}
