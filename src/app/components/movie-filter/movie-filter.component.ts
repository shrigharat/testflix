import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {
  @Output() filterEmitter = new EventEmitter();
  @Input() movieType = '';

  filtersForm = new FormGroup({
    movieType: new FormControl('all')
  });

  constructor() { }

  ngOnInit(): void {
  }

  filterSubmit() {
    this.filterEmitter.emit(this.filtersForm.value)
    return false;
  }

}
