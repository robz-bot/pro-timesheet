import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/constants';
import { Observable } from 'rxjs';
import { login } from 'src/app/models/login';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl: string = apiUrl.url;

  //Login URL
  private loginUrl = this.baseUrl + 'login';
  private getUserUrl = this.baseUrl + 'getUser';

  LoginUser(User: login): Observable<Object> {
    return this.httpClient.post(`${this.loginUrl}`, User, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    });
  }

  getUserById(id:number):Observable<Object>{
    return this.httpClient.get(`${this.getUserUrl}/${id}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
}
