export default interface IMoviePreview {
  Year: string;
  Title: string;
  Poster: string;
  Type: string;
  imdbID: string;
}

export const defaultMoviePreview: IMoviePreview = {
  Year: '',
  Title: '',
  Poster: '',
  Type: '',
  imdbID: '',
};
