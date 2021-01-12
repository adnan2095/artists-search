import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchLandingPageComponent } from './search-landing-page/search-landing-page.component';
import { ArtistEventsComponent } from './artist-events/artist-events.component';

const routes: Routes = [
  { path: '', component: SearchLandingPageComponent },
  { path: 'artist-events/:name', component: SearchLandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
