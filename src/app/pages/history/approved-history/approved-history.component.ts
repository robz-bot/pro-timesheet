import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/services/timesheet.service';

@Component({
  selector: 'app-approved-history',
  templateUrl: './approved-history.component.html',
  styleUrls: ['./approved-history.component.css'],
})
export class ApprovedHistoryComponent implements OnInit {
  constructor(private timesheetService: TimesheetService) {}
  approvedHistory: any;
  responseKeys: any;
  ngOnInit(): void {
    this.timesheetService.getApprovedHistory().subscribe((res: any) => {
      console.log(res);
      this.approvedHistory = res;

      this.responseKeys = Object.keys(res);
    });
  }
}
