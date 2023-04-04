import { Component, OnInit } from '@angular/core';
import { timesheet } from 'src/app/models/timesheet';
import { TimesheetService } from 'src/app/services/timesheet.service';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-timesheet',
  templateUrl: './my-timesheet.component.html',
  styleUrls: ['./my-timesheet.component.css']
})
export class MyTimesheetComponent implements OnInit {
  page = 1;
  pageSize = 5;
  collectionSize = 0

  constructor(private timesheetService: TimesheetService) {

  }
  recordList: any;
  resRecordList : any
  userId: any = sessionStorage.getItem('userId');

  ngOnInit(): void {
    this.getTimeSheetByUserIdAndApproval();

    this.refreshCountries();
  }


  refreshCountries() {
    // this.getTimeSheetByUserIdAndApproval()
    this.resRecordList = this.recordList.map((item: any, i: any) => ({ id: i + 1, ...item })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
  }
  getTimeSheetByUserIdAndApproval() {
    this.timesheetService
      .getTimeSheetByUserIdAndApproval(this.userId, true)
      .subscribe((res) => {
        console.log(res);
        this.recordList = res;
        this.recordList.sort((a:any,b:any) => Date.parse(b.updatedDateTime) - Date.parse(a.updatedDateTime) )
        this.collectionSize = this.recordList.length;
        this.refreshCountries()
      });
  }
  expandContent = true;
  findDetails(data:any) {
    return this.recordList.filter(
      (x:any) => x.id === data.id
    );
  }

}

