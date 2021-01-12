import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchLandingPageComponent } from './search-landing-page/search-landing-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ArtistEventsComponent } from './artist-events/artist-events.component';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SkeletonModule } from 'primeng/skeleton';
@NgModule({
  declarations: [
    AppComponent,
    SearchLandingPageComponent,
    SearchResultComponent,
    ArtistEventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    SkeletonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
