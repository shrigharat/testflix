import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import IMoviePreview from '../../models/movie-preview.model';
import { MovieService } from '../../services/movie.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-movie-results',
  templateUrl: './movie-results.component.html',
  styleUrls: ['./movie-results.component.css'],
})
export class MovieResultsComponent implements OnInit {
  searchQuery = '';
  totalResults: number = 1;
  currentPage = 1;
  movieResults: IMoviePreview[] = [];
  loading = true;
  isFiltersOpen: boolean = false;
  isSortingOpen: boolean = false;
  resultType = 'all';
  sortbyYear = 'none';

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public movieService: MovieService,
    public theme: ThemeService
  ) {}

  ngOnInit(): void {
    //subscribe to route param changes
    this.route.params.subscribe((params: Params) => {
      //update the search query only when route param changes
      this.searchQuery = params['query'];
      this.searchFunction(this.searchQuery);
    });

    this.route.queryParamMap
      .pipe(
        switchMap((queryParams: Params) => {
          return of(queryParams);
        })
      )
      .subscribe((queryParams: Params) => {
        this.currentPage = parseInt(queryParams['params']['page']);
        this.resultType = queryParams['params']['type'];
        this.searchFunction(this.searchQuery);
      });
  }

  //navigate to new route parameter when search form is submitted
  async changeParams(searchString: string) {
    await this.router.navigateByUrl(
      'search/' + searchString + '?page=1&type=' + this.resultType
    );
  }

  //search movies
  async searchFunction(searchString: string) {
    this.loading = true;
    //remove whitespace from search
    searchString = searchString.trim();
    try {
      if (searchString) {
        let result = await this.movieService.fetchMovies(
          searchString,
          this.currentPage,
          this.resultType
        );
        if (!result['Search']) {
          this.movieResults = [];
        } else {
          this.movieResults = this.movieService.transformMoviePreviewArray(
            result['Search']
          );
        }
        this.totalResults = parseInt(result['totalResults']);
      }
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.movieResults = [];
      console.error(e);
    }
  }

  //update the query parameter in page when pagination button is clicked
  async fetchNextPage(pageNo: number) {
    if (pageNo === this.currentPage) return;
    await this.router.navigateByUrl(
      'search/' +
        this.searchQuery +
        '?page=' +
        pageNo +
        '&type=' +
        this.resultType
    );
  }

  async applyFilter(filters: any) {
    await this.router.navigateByUrl(
      'search/' + this.searchQuery + '?page=1' + '&type=' + filters.movieType
    );
  }

  handleSortEvent(sortByYearType: string) {
    this.movieResults = this.movieService.sortMovies(
      this.movieResults,
      sortByYearType
    );
  }
}
