import { NgModule, SchemaMetadata } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';
import { MovieResultsComponent } from './movie-results/movie-results.component';
import { ChipComponent } from './chip/chip.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { SortComponent } from './sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent,
    SearchInputComponent,
    MovieResultsComponent,
    ChipComponent,
    MovieCardComponent,
    PaginationComponent,
    NotFoundComponent,
    MovieFilterComponent,
    SortComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
