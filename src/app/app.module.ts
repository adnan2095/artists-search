import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchLandingPageComponent } from './search-landing-page/search-landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchLandingPageComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
