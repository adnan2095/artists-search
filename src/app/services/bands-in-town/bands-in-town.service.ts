import { Router } from '@angular/router';
import { HttpService } from './../http/http.service';
import { Artist } from './../../interfaces/artist';
import { Injectable } from '@angular/core';
import { Events } from 'src/app/interfaces/event';
import { HttpParams } from '@angular/common/http';

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
  searchState: 'idle' | 'searching' | 'searched' | 'eventSearching'= 'idle';
  query: string = '';
  events: Events[] = [];

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
    this.searchState = 'searching';
    this.http.get(path, params).subscribe(
      response => {
        this.searchResults = isEnhanced ? response.artists : [response];
        this.searchState = 'searched';
      },
      error => {
        console.log(error);
      }
    );
  }

  getEvents(artistName: string) {
    this.searchState = 'eventSearching';
    this.http.get(`api/artists/${artistName}/events`, new HttpParams().set('app_id', 'something')).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/artist-events/', artistName])
      },
      error => {
        console.log(error);
      }
    );
  }
}
