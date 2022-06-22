export default interface IMovie {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string[];
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string[];
  country: string;
  poster: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
}

export const defaultMovie: IMovie = {
  title: '',
  year: '',
  rated: '',
  released: '',
  runtime: '',
  genre: [],
  director: '',
  writer: '',
  actors: '',
  plot: '',
  language: [],
  country: '',
  poster: '',
  imdbRating: '',
  imdbVotes: '',
  imdbID: '',
  type: '',
};
