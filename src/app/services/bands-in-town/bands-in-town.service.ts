import { Router } from '@angular/router';
import { HttpService } from './../http/http.service';
import { Artist } from './../../interfaces/artist';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BandsInTownService {

  /**
   * List that contains all artists for a search
   *
   * @type {Artist[]}
   * @memberof BandsInTownService
   */
  searchResults: Artist[] = [];
  isSearched = false;
  query: string = '';

  /**
   * Creates an instance of BandsInTownService.
   * @param {HttpService} http
   * @memberof BandsInTownService
   */
  constructor(private http: HttpService,
    private router: Router) { }

  /**
   * Method for fetching search results
   *
   * @memberof BandsInTownService
   */
  getArtists(path, params, isEnhanced) {
    this.http.get(path, params).subscribe(
      response => {
        this.searchResults = [response];
        this.isSearched = true;
        this.router.navigate(['/search-results', this.query]);
      },
      error => {
        console.log(error);
      }
    )

  }
}
