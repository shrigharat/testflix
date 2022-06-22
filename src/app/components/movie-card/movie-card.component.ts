import { Component, Input, OnInit } from '@angular/core';
import IMoviePreview, {
  defaultMoviePreview,
} from '../../models/movie-preview.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: IMoviePreview = defaultMoviePreview;

  NOT_FOUND_IMG_URL =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png';

  constructor() {}

  ngOnInit(): void {
    this.movie.poster =
      !this.movie.poster || this.movie.poster === 'N/A'
        ? this.NOT_FOUND_IMG_URL
        : this.movie.poster;
  }
}
