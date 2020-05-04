import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Query } from '../_models/query';
import { Feedback } from '../_models/feedback';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  newQuery(query: Query) {
    return this.http.post<Query>(this.baseUrl + 'api/api/post/email.php', query, this.httpOptions);
  }

  getNews() {
    return this.http.get(this.baseUrl + 'news-api/api/post/news/get_all.php');
  }

  getExchangeRates() {
    return this.http.get(this.baseUrl + 'api/api/post/get_forex.php');
  }

  getPolPod() {
    return this.http.get(this.baseUrl + 'api/api/post/v2/getRatesPolPod.php');
  }

  getContainerRates() {
    return this.http.get(this.baseUrl + 'api/api/post/getRates.php');
  }

  sendFeedback(feedback: Feedback) {
    return this.http.post(this.baseUrl + 'api/api/post/feedback.php', feedback);
  }

  newBooking() {}
}
