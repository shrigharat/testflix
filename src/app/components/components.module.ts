import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip/chip.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SortComponent } from './sort/sort.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ChipComponent,
    MovieCardComponent,
    MovieFilterComponent,
    PaginationComponent,
    SearchInputComponent,
    SortComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    ChipComponent,
    MovieCardComponent,
    MovieFilterComponent,
    PaginationComponent,
    SearchInputComponent,
    SortComponent,
  ],
})
export class ComponentsModule {}
