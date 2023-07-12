import { timesheet } from 'src/app/models/timesheet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/constants';

@Injectable({
    providedIn: 'root'

})
export class HolidayService {
    constructor(private httpClient: HttpClient){ }
    private baseUrl: string = apiUrl.url;


    private addHolidayUrl = this.baseUrl + 'addHoliday';
    private getAllHolidayUrl = this.baseUrl + 'getAllHoliday';
    private getAllByMonthUrl = this.baseUrl + 'getAllByMonth';
    private updateHolidayUrl = this.baseUrl + 'updateHoliday';
    private deleteHolidayByIdUrL = this.baseUrl + 'deleteHolidayById';

    addHoliday(request: timesheet): Observable<Object> {
        return this.httpClient.post(`${this.addHolidayUrl}`, request,{
            headers: {
                'pro-api-key': 'h1r5pr0',
            },
        });
    }
    
    getAllHoliday(): Observable<any> {
        return this.httpClient.get(`${this.getAllHolidayUrl}`,{
            headers: {
                'pro-api-key': 'h1r5pr0',
            }
        },
        )
    }

    getAllByYear(year: number): Observable<Object> {
        return this.httpClient.get(`${this.getAllByYear}/${year}`,{
            headers: {
                'pro-api-key': 'h1r5pr0',
            },
        })
    }
    getAllByMonth(month: string): Observable<Object> {
        return this.httpClient.get(`${this.getAllByMonthUrl}/${month}`,{
           headers: {
            'pro-api-key': 'h1r5pr0',
           },
        })
    }

    updateHoliday(request: timesheet): Observable<any>{
        return this.httpClient.put(`${this.updateHolidayUrl}`,request,{
            headers: {
                'pro-api-key': 'h1r5pr0',
            },
        })
    }

    deleteHolidayById(timesheetId: any): Observable<any> {
        return this.httpClient.delete(`${this.deleteHolidayByIdUrL}/${timesheetId}`,{
            headers: {
                'pro-api-key': 'h1r5pr0',
            },
        })
    }

}
