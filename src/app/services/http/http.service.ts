import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  /**
   * Base url for calling APIs
   *
   * @memberof HttpService
   */
  baseUrl = environment.apiBaseUrl;

  /**
   * Creates an instance of HttpService.
   * @param {HttpClient} http
   * @memberof HttpService
   */
  constructor(private http: HttpClient) { }

  /**
   * Takes an api route as an input and returns the response
   *
   * @param {string} path
   * @return {*}  {Observable<any>}
   * @memberof HttpService
   */
  get(path: string): Observable<any> {
    return this.http.get(this.baseUrl + path);
  }
  // Add CRUD http generic methods according to need here
}
