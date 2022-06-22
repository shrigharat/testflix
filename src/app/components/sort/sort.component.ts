import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  @Output() sortEmitter = new EventEmitter();

  sortingForm = new FormGroup({
    sortByYearType: new FormControl('none'),
  });

  constructor() {}

  ngOnInit(): void {}

  sortSubmit() {
    this.sortEmitter.emit(this.sortingForm.value.sortByYearType);
  }
}
