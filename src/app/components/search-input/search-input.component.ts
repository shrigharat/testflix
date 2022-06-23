import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  @Output() emitter = new EventEmitter();
  @ViewChild('focusContainer') focusContainer: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  // focusContainer : any;

  @Input() query = '';

  searchHistory = [];

  showSearchHistory = false;
  constructor(
    public movieService: MovieService,
    public renderer: Renderer2,
    public route: ActivatedRoute
  ) {
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

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //focus search input field
    console.log('Router');
    console.log({route: this.route});
    if(!this.route.snapshot.url || this.route.snapshot.url==[]) {
      this.searchInput.nativeElement.focus();
    }
  }

  updateQuery(e: KeyboardEvent) {
    this.query = (e.target as HTMLInputElement).value;
  }

  searchItemClick(item: string) {
    this.query = item;
    this.searchFunction();
  }

  blurEventHandle(e: Event) {
    this.showSearchHistory = false;
    console.log(e);
  }

  searchFunction() {
    this.showSearchHistory = false;
    if (this.query) {
      this.emitter.emit(this.query);
    }
    return false;
  }
}
