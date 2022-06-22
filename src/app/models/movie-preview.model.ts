export default interface IMoviePreview {
  year: string;
  title: string;
  poster: string;
  type: string;
  imdbID: string;
}

export const defaultMoviePreview: IMoviePreview = {
  year: '',
  title: '',
  poster: '',
  type: '',
  imdbID: '',
};
