import { Artist } from './../interfaces/artist';
import { BandsInTownService } from './../services/bands-in-town/bands-in-town.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() artist: Artist = null;

  constructor(private bandsInTownService: BandsInTownService) { }

  ngOnInit() {
  }
}
