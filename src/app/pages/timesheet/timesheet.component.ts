import { Component, OnInit } from '@angular/core';
import { TIMESHEET_INFO } from 'src/app/constant';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  currentTimesheetInfo: string = TIMESHEET_INFO.TIMESHEET_CURRENT;
  waitTimesheetInfo: string = TIMESHEET_INFO.TIMESHEET_WAIT;

  constructor() { }

  ngOnInit(): void {
  }

}
