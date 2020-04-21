import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Query } from '../_models/query';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  newQuery(query: Query) {
    return this.http.post(this.baseUrl + 'api/api/post/email.php', query);
  }

  getNews() {
    return this.http.get(this.baseUrl + 'news-api/api/post/news/get_all.php');
  }
}
