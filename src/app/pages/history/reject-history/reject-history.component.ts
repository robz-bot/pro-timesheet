import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/services/timesheet.service';

@Component({
  selector: 'app-reject-history',
  templateUrl: './reject-history.component.html',
  styleUrls: ['./reject-history.component.css']
})
export class RejectHistoryComponent implements OnInit {

  constructor(private timesheetService: TimesheetService) {}
  rejectedHistory: any;
  responseKeys: any;
  ngOnInit(): void {
    this.timesheetService.getRejectedHistory().subscribe((res: any) => {
      console.log(res);
      this.rejectedHistory = res;

      this.responseKeys = Object.keys(res);
    });
  }


}
