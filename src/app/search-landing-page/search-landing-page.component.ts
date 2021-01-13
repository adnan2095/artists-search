import { BandsInTownService } from './../services/bands-in-town/bands-in-town.service';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-landing-page',
  templateUrl: './search-landing-page.component.html',
  styleUrls: ['./search-landing-page.component.scss']
})
export class SearchLandingPageComponent implements OnInit {

  /**
   * Form group for searching
   *
   * @type {FormGroup}
   * @memberof SearchLandingPageComponent
   */
  searchForm: FormGroup;

  /**
   * Creates an instance of SearchLandingPageComponent.
   *
   * @param {BandsInTownService} bandsInTownService
   * @param {FormBuilder} formBuilder
   * @memberof SearchLandingPageComponent
   */
  constructor(private bandsInTownService: BandsInTownService,
    private formBuilder: FormBuilder) { }

  /**
   * This is an angular hook called on initialization of component
   *
   * @memberof SearchLandingPageComponent
   */
  ngOnInit() {
    this.createForm();
    const oldQuery = localStorage.getItem('query');
    if (oldQuery) {
      this.setQuery(oldQuery);
    }
  }

  /**
   * This method initiates the form group
   *
   * @memberof SearchLandingPageComponent
   */
  createForm() {
    this.searchForm = this.formBuilder.group({
      searchQuery: ['', Validators.required],
      enhancedSearch: [[]]
    });
  }

  /**
   * This method checks for basic result (one result) or enhanced results (keyword matching list)
   *
   * @memberof SearchLandingPageComponent
   */
  getSearchResults() {
    const query = this.searchForm.get('searchQuery').value;
    if (query.length > 0) {
      this.bandsInTownService.query = query;
      localStorage.setItem('enhanced', this.searchForm.get('enhancedSearch').value.length > 0 ? 'enhanced' : '');
      if (this.searchForm.get('enhancedSearch').value.length > 0 ) {
        this.bandsInTownService.getArtists('originApi/searchSuggestions', new HttpParams().set('searchTerm', query).set('cameFromCode', '257'), true);
      } else {
        this.bandsInTownService.getArtists('api/artists/' + query, new HttpParams().set('app_id', 'something'), false);
      }
    }
  }

  setQuery(query) {
    this.searchForm.get('searchQuery').patchValue(query);
    const enhancedValue = localStorage.getItem('enhanced');
    this.searchForm.get('enhancedSearch').setValue(enhancedValue === 'enhanced' ? [undefined] : '');
    this.getSearchResults();
  }
}
