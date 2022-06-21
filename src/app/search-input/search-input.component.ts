import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  @Output() emitter = new EventEmitter();
  @ViewChild('focusContainer') focusContainer: ElementRef;
  // focusContainer : any;

  @Input() query = '';

  showSearchHistory = false;
  constructor(public movieService: MovieService, public renderer: Renderer2) {
    this.renderer.listen(window, 'click', (e: Event) => {
      if (
        e.target !== this.focusContainer.nativeElement &&
        !this.focusContainer.nativeElement.contains(e.target)
      ) {
        this.showSearchHistory = false;
        // console.log('Clicked outside focus container');
      }
    });
  }

  ngOnInit(): void {}

  updateQuery(e: KeyboardEvent) {
    this.query = (e.target as HTMLInputElement).value;
  }

  searchItemClick(item: string) {
    this.query = item;
  }

  blurEventHandle(e: Event) {
    this.showSearchHistory = false;
    console.log(e);
  }

  searchFunction($event: Event) {
    $event.preventDefault();
    this.showSearchHistory = false;
    if (this.query) {
      this.emitter.emit(this.query);
    }
    return false;
  }
}
