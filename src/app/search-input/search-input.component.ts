import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  @Output() emitter = new EventEmitter();

  @Input() query = '';

  constructor() {}

  ngOnInit(): void {
    // console.log('....');
    // console.log(this.searchFunction);
    // console.log('....');
  }

  updateQuery(e: KeyboardEvent) {
    this.query = (e.target as HTMLInputElement).value;
  }

  searchFunction($event: Event) {
    $event.preventDefault();
    if (this.query) {
      this.emitter.emit(this.query);
    }
    return false;
  }
}
