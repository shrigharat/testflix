import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieResultsComponent } from './movie-results/movie-results.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    MovieResultsComponent,
    MovieDetailComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, ComponentsModule],
  exports: [
    HomeComponent,
    MovieResultsComponent,
    MovieDetailComponent,
    NotFoundComponent,
  ],
})
export class PagesModule {}
