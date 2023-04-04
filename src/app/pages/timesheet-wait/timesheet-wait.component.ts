import { Component, OnInit } from '@angular/core';
import {
  NgbCalendar,
  NgbDateStruct,
  NgbOffcanvas,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable, OperatorFunction } from 'rxjs';
import { timesheet } from 'src/app/models/timesheet';
import { CommonService } from 'src/app/services/common.service';
import { TimesheetService } from 'src/app/services/timesheet.service';

@Component({
  selector: 'app-timesheet-wait',
  templateUrl: './timesheet-wait.component.html',
  styleUrls: ['./timesheet-wait.component.css'],
})
export class TimesheetWaitComponent implements OnInit {
  constructor(
    private timesheetService: TimesheetService,
    private commonService: CommonService
  ) {}

  //Form Models Declarations
  userId: any = sessionStorage.getItem('userId');
  employeeName: string = '';
  managerId: any = sessionStorage.getItem('managerId');
  comments: string = '';

  ngOnInit(): void {
    this.getAllEmployeeName();
    this.getTimeSheetByUserIdAndApproval();
    this.getAllTimeSheetByManagerId();
  }

  recordList: timesheet[] = new Array();

  getTimeSheetByUserIdAndApproval() {
    this.timesheetService
      .getTimeSheetByUserIdAndApproval(this.userId, false)
      .subscribe((res) => {
        console.log(res);
      });
  }

  employees: any;
  temp: string[] = [];

  getAllEmployeeName() {
    this.commonService.getAllEmployeeName().subscribe((res) => {
      this.employees = res;
      for (var i = 0; i < this.employees.length; i++) {
        this.temp.push(this.employees[i].split(':')[0].trim());
      }
      console.log(this.temp);
    });
  }

  formatter = (result: string) => result.toUpperCase();

  searchEmployees: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term: any) =>
        term === ''
          ? []
          : this.temp
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );
  getAllTimeSheetByManagerId() {
    this.timesheetService
      .getAllTimeSheetByManagerId(this.managerId)
      .subscribe((res) => {
        console.log(res);
        this.recordList = res;
        this.recordList.sort(
          (a: any, b: any) =>
            Date.parse(b.updatedDateTime) - Date.parse(a.updatedDateTime)
        );
      });
  }

  Search() {
    let empId = 0;
    this.employees.filter((x: any) => {
      if (x.split(':')[0].trim() == this.employeeName) {
        console.log(x);
        empId = x.split(':')[1].trim();
        console.log(empId);

        //servies goes here --- pass empid in param
        this.timesheetService
          .searchTimeSheetByUserId(empId)
          .subscribe((res) => {
            console.log(res);
            this.recordList = res;
          });
      }
    });
  }
  reset() {
    this.employeeName = '';
    this.getAllTimeSheetByManagerId();
  }

  itemFromTable: any;
  getItem(item: any) {
    this.itemFromTable = item;
  }
  approveTimeSheet(type: string, item: any) {
    if (type == 'Approved') {
      console.log(item);
      item.approvedByManager = 'Approved';
    } else {
      item.comments = this.comments;
      item = this.itemFromTable;
      item.approvedByManager = 'Reject';
      this.getAllTimeSheetByManagerId();
    }

    this.timesheetService.approveTimeSheet(item).subscribe((res) => {
      console.log(res);
      this.getAllTimeSheetByManagerId();
    });
  }
  searchTagRecord(type: string) {
    const searchDto = {
      type: type,
    };
    this.timesheetService.searchByDate(searchDto).subscribe((res) => {
      console.log(res);
      this.recordList = res;
    });
  }
  allRecords() {
    this.getAllTimeSheetByManagerId();
  }
}
