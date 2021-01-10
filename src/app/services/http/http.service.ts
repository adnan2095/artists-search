import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
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
   * @param {HttpParams} params
   * @return {*}  {Observable<any>}
   * @memberof HttpService
   */
  get(path: string, params: HttpParams): Observable<any> {
    return this.http.get(path, { params: params});
  }
}
