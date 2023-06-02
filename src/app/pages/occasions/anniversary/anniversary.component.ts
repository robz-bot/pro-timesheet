import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/services/timesheet.service';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css']
})
export class AnniversaryComponent implements OnInit {

  constructor(
    private timesheetService: TimesheetService,
  ) { }
  ngOnInit(): void {
    this.getAllDateOfBirth();

  }
  anniversary: any
  getAllDateOfBirth() {
    this.timesheetService
      .getAllDateOfJoining()
      .subscribe((res: any) => {
        console.log(res);
        //year-month-date
        this.anniversary = res
      });
  }

}
