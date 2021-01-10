import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-landing-page',
  templateUrl: './search-landing-page.component.html',
  styleUrls: ['./search-landing-page.component.scss']
})
export class SearchLandingPageComponent implements OnInit {

  searchQuery = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
