import { Router } from '@angular/router';
import { HttpService } from './../http/http.service';
import { Artist } from './../../interfaces/artist';
import { Injectable } from '@angular/core';
import { Events } from 'src/app/interfaces/event';
import { HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';

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
  searchState: 'idle' | 'searching' | 'searched' | 'eventSearching' | 'eventSearched'= 'idle';
  query: string = '';
  events: Events[] = [];
  selectedArtist: Artist = null;

  /**
   * Creates an instance of BandsInTownService.
   * @param {HttpService} http
   * @memberof BandsInTownService
   */
  constructor(private http: HttpService,
    private router: Router,
    private location: Location) { }

  /**
   * Method for fetching search results
   *
   * @memberof BandsInTownService
   */
  getArtists(path, params: HttpParams, isEnhanced) {
    localStorage.setItem('query', this.query);
    this.selectedArtist = null;
    this.searchState = 'searching';
    this.http.get(path, params).subscribe(
      response => {
        this.searchResults = isEnhanced ? response.artists : [response];
        this.searchState = 'searched';
        localStorage.setItem('artist', JSON.stringify(this.searchResults));
      },
      error => {
        console.log(error);
      }
    );
  }

  getEvents(artist: Artist) {
    this.selectedArtist = artist;
    localStorage.setItem('selectedArtist', JSON.stringify(this.selectedArtist));
    this.searchState = 'eventSearching';
    this.http.get(`api/artists/${artist.name}/events`, new HttpParams().set('app_id', 'something')).subscribe(
      response => {
        this.events = response;
        this.router.navigate(['/artist-events/', artist.name]);
        this.searchState = 'eventSearched';
      },
      error => {
        console.log(error);
      }
    );
  }

  navigateToHome() {
    this.searchState = 'searched';
    this.selectedArtist = null;
    this.location.back();
  }
}
