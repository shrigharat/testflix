import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() totalResults: number = 1;
  @Input() currentPage = 1;

  @Output() pageNumberEmitter = new EventEmitter<number>();

  pages = [1];
  pageLength = 10;
  displayPageNumbers: any = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalResults']) {
      let pages = Math.ceil(this.totalResults / this.pageLength);
      let pagesArray = [];
      for (let i = 1; i <= pages; i++) {
        pagesArray.push(i);
      }
      this.pages = pagesArray;
    }
    let displayButtons = [{ name: '1', value: 1 }];
    for (let i = this.currentPage - 3; i <= this.currentPage + 3; i++) {
      if (i === 1 || i === this.pages.length) continue;
      else if (i === this.currentPage) {
        displayButtons.push({ name: i + '', value: i });
      } else if (i < 1 || i > this.pages.length) continue;
      else if (i < this.currentPage && this.currentPage - i > 2) {
        displayButtons.push({ name: '...', value: -1 });
      } else if (i > this.currentPage && i - this.currentPage > 2) {
        displayButtons.push({ name: '...', value: -1 });
      } else {
        displayButtons.push({ name: i + '', value: i });
      }
    }
    if (this.pages.length > 1) {
      displayButtons.push({
        name: this.pages.length + '',
        value: this.pages.length,
      });
    }
    this.displayPageNumbers = displayButtons;
  }

  pageButtonClick(pageNumber: number) {
    this.pageNumberEmitter.emit(pageNumber);
  }
}
