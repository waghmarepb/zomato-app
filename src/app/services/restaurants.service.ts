/*
    @Project: Zomato API Demo
    @Author: Ashish Vishwakarma
*/

import { Injectable, CompilerFactory } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestaurantsService {

  private entity = {
    id: 5,
    type: 'city'
  };

  private headers: HttpHeaders;
  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({
      'user-key': environment.ZOMATO_API_KEY
    });
  }

  // setting headers for url
  private getUrl(url: string): Observable<any> {
    const baseurl = `${environment.BASE_URL}${url}`;
    return this.http.get(baseurl, { headers: this.headers });
  }

  public getRestaurants() {
    return this.getUrl(`search?entity_id=${this.entity.id}&entity_type=${this.entity.type}`);
  }

  public getRestaurant(restaurantId: string) {
    return this.getUrl(`restaurant?res_id=${restaurantId}`);
  }
}
