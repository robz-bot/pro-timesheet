import { timesheet } from './../models/timesheet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl: string = apiUrl.url;

  //Login URL
  private addTimesheetUrl = this.baseUrl + 'addTimesheet';
  private getUserUrl = this.baseUrl + 'getUser';
  private getTimeSheetByUserIdAndApprovalUrl = this.baseUrl + 'getTimeSheetByUserIdAndApproval';
  private updateTimeSheetUrl = this.baseUrl + 'updateTimeSheet';
  private deleteTimeSheetByIdUrl = this.baseUrl + 'deleteTimeSheetById'
  private submitTimeSheetUrl = this.baseUrl + 'submitTimeSheet';
  private managerApproveUrl = this.baseUrl + 'getAllTimeSheetByManagerId';
  private searchUrl = this.baseUrl + 'searchTimeSheetByUserId';
  private approveTimeSheetUrl = this.baseUrl + 'approveTimeSheet';
  private searchDateUrl = this.baseUrl + 'searchByDate';
  private getAllDateOfBirthUrl = this.baseUrl + 'getAllDateOfBirth';
  private getAllDateOfJoiningUrl = this.baseUrl + 'getAllDateOfJoining';
  private getApprovedHistoryUrl = this.baseUrl + 'getApprovedHistory';
  private getRejctedHistoryUrl = this.baseUrl + 'getrejectedHistory';


  addTimesheet(request: timesheet): Observable<Object> {
    return this.httpClient.post(`${this.addTimesheetUrl}`, request, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    });
  }

  getUserById(id: number): Observable<Object> {
    return this.httpClient.get(`${this.getUserUrl}/${id}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
  getTimeSheetByUserIdAndApproval(userId: any, isApproval: boolean): Observable<any> {
    return this.httpClient.get(`${this.getTimeSheetByUserIdAndApprovalUrl}/${userId}/${isApproval}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
  updateTimeSheet(request: timesheet): Observable<Object> {
    return this.httpClient.put(`${this.updateTimeSheetUrl}`, request, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    });
  }
  deleteTimeSheetById(timeSheetId: any): Observable<any> {
    return this.httpClient.delete(`${this.deleteTimeSheetByIdUrl}/${timeSheetId}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
  submitTimeSheet(timeSheetList: any): Observable<Object> {
    return this.httpClient.put(`${this.submitTimeSheetUrl}`, timeSheetList, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
  getAllTimeSheetByManagerId(managerId: any): Observable<any> {
    return this.httpClient.get(`${this.managerApproveUrl}/${managerId}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
  searchTimeSheetByUserId(userId: any): Observable<any> {
    return this.httpClient.get(`${this.searchUrl}/${userId}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
  approveTimeSheet(timeSheetList: any): Observable<any> {
    return this.httpClient.put(`${this.approveTimeSheetUrl}`, timeSheetList, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
  getAllDateOfBirth(): Observable<any> {
    return this.httpClient.get(`${this.getAllDateOfBirthUrl}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
  getAllDateOfJoining(): Observable<any> {
    return this.httpClient.get(`${this.getAllDateOfJoiningUrl}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
  getApprovedHistory(): Observable<any> {
    return this.httpClient.get(`${this.getApprovedHistoryUrl}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
  getRejectedHistory(): Observable<any> {
    return this.httpClient.get(`${this.getRejctedHistoryUrl}`, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
  searchByDate(searchDto: any): Observable<any> {
    return this.httpClient.put(`${this.searchDateUrl}`, searchDto, {
      headers: {
        'pro-api-key': 'h1r5pr0',
      },
    })
  }
}
