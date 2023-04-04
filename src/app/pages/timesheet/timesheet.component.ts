import { Component, OnInit } from '@angular/core';
import { TIMESHEET_INFO } from 'src/app/constant';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  currentTimesheetInfo: string = TIMESHEET_INFO.TIMESHEET_CURRENT;
  waitTimesheetInfo: string = TIMESHEET_INFO.TIMESHEET_WAIT;

  constructor(private commonService: CommonService,) { }
  loggedInUserId: number = 0;
  ngOnInit(): void {
    this.loggedInUserId = this.commonService.loggedInUserId();
  }

}
