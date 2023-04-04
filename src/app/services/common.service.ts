import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private httpClient: HttpClient) {

  }
  private baseUrl: string = apiUrl.url;

  //getAllProjects URL
  private getAllProjectsUrl = this.baseUrl + 'getAllProjectName';

  //getAllEmployeeName
  private getAllEmployeeUrl = this.baseUrl + 'getAllEmplyeeName';

  getAllProjectName():Observable<any>{
    return this.httpClient.get(`${this.getAllProjectsUrl}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }

  userId:any = sessionStorage.getItem('userId');;
  getUserId(): boolean {
    console.log("userId: "+this.userId)
    return this.userId == null || this.userId == '' || this.userId == undefined
      ? false
      : true;
  }

  loggedInUserId(): number {
    return this.userId;
  }

  getAllProject():Observable<Object>{
    return this.httpClient.get(`${this.getAllProjectsUrl}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
  getAllEmployeeName():Observable<Object>{
    return this.httpClient.get(`${this.getAllEmployeeUrl}` , {
      headers: {
        'pro-api-key':'h1r5pr0',
      }
    })
  }
}
