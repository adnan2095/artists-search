import { BandsInTownService } from './../services/bands-in-town/bands-in-town.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-events',
  templateUrl: './artist-events.component.html',
  styleUrls: ['./artist-events.component.scss']
})
export class ArtistEventsComponent implements OnInit {

  constructor(private bandsInTownService: BandsInTownService) { }

  ngOnInit() {
    const artist = localStorage.getItem('selectedArtist');
    if (artist && JSON.parse(artist)) {
      this.bandsInTownService.selectedArtist = JSON.parse(artist);
      if (this.bandsInTownService.events.length === 0) {
        this.bandsInTownService.getEvents(JSON.parse(artist));
      }
    }
  }
}
