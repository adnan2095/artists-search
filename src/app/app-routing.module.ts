import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchLandingPageComponent } from './search-landing-page/search-landing-page.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', component: SearchLandingPageComponent },
  { path: 'search-results/:name', component: SearchResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
