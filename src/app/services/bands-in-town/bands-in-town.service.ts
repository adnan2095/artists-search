import { Artist } from './../../interfaces/artist';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BandsInTownService {

  searchResults: Artist[] = [];

  constructor() { }
}
