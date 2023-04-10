import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl: string = apiUrl.url;

  //getTaskandHours
  private getTaskAndHoursUrl = this.baseUrl + 'getTaskAndHours';

  getTaskAndHours(): Observable<Object> {
    return this.httpClient.get(`${this.getTaskAndHoursUrl}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    });
  }
}
