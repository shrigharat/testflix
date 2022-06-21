import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { MovieResultsComponent } from './movie-results/movie-results.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:query', component: MovieResultsComponent },
  { path: 'movie/:movieId', component: MovieDetailComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
