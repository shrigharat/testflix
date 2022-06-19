import { Component, Input, OnInit } from '@angular/core';
import IMoviePreview, {
  defaultMoviePreview,
} from '../models/movie-preview.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: IMoviePreview = defaultMoviePreview;

  constructor() {}

  ngOnInit(): void {
    this.movie.Poster =
      !this.movie.Poster || this.movie.Poster === 'N/A'
        ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png'
        : this.movie.Poster;
  }
}
