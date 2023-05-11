import { Component, OnInit } from '@angular/core';
import { TimesheetService } from 'src/app/services/timesheet.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  constructor(
    private timesheetService: TimesheetService,
  ) { }
  ngOnInit(): void {
    this.getAllDateOfBirth();

  }
  birthday: any
  getAllDateOfBirth() {
    this.timesheetService
      .getAllDateOfBirth()
      .subscribe((res: any) => {
        console.log(res);
        this.birthday = res
      });
  }


}
