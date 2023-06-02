import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  NgbCalendar,
  NgbDateStruct,
  NgbOffcanvas,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { FORMAT, TIMESHEET_INFO, TIME_METHODS } from 'src/app/constant';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { timesheet } from 'src/app/models/timesheet';
import { ToasterService } from 'src/app/services/toaster.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { TimesheetService } from 'src/app/services/timesheet.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
const tasks = [
  'Coding & Development',
  'KT Session',
  'QC',
  'Requirement Gathering',
  'Testing & Integration',
  'Support',
];

// const projects = ['HireProUs', 'ProAcc', 'ProCompare'];
@Component({
  selector: 'app-timesheet-current',
  templateUrl: './timesheet-current.component.html',
  styleUrls: ['./timesheet-current.component.css'],
})
export class TimesheetCurrentComponent implements OnInit {
  constructor(
    private offcanvasService: NgbOffcanvas,
    private calendar: NgbCalendar,
    private toaster: ToasterService,
    private timesheetService: TimesheetService,
    private commonService: CommonService,
    private router: Router
  ) {}
  currentTimesheetInfo: string = TIMESHEET_INFO.TIMESHEET_CURRENT;

  closeResult: string = '';
  date: NgbDateStruct | undefined;

  start_time = { hour: 10, minute: 30 };
  end_time = { hour: 11, minute: 30 };
  meridian = true;

  deletePopupVisible = false;

  // Form Models Declarations
  caclHrs: string = '';
  projectName: string = '';
  projectId: string = '';
  taskId: string = '';
  description: string = '';
  userId: any = sessionStorage.getItem('userId');
  managerId: any = sessionStorage.getItem('managerId');
  createdBy: string = '';
  updatedBy: string = '';
  isEdit: boolean = false;
  billable: boolean =false;

  ngOnInit(): void {
    this.getAllProjectName();
    this.getTimeSheetByUserIdAndApproval();
  }

  projects: any;
  temp: string[] = [];

  getAllProjectName() {
    this.commonService.getAllProjectName().subscribe((res) => {
      console.log(res);
      this.projects = res;
      for (var i = 0; i < this.projects.length; i++) {
        this.temp.push(this.projects[i].split(':')[1].trim());
      }
      console.log(this.temp);
    });
  }
  getTimeSheetByUserIdAndApproval() {
    this.timesheetService
      .getTimeSheetByUserIdAndApproval(this.userId, false)
      .subscribe((res) => {
        console.log(res);
        this.recordList = res;
      });
  }

  formatter = (result: string) => result.toUpperCase();

  searchTasks: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term: any) =>
        term === ''
          ? []
          : tasks
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );
  searchProjects: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term: any) =>
        term ===''
          ? []
          : this.temp
              .filter(
                (v: any) => v.toLowerCase().indexOf(term.toLowerCase()) > -1
              )
              .slice(0, 10)
      )
    );

  openNoBackdrop(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      backdrop: 'static',
      position: 'end',
    });
  }

  selectToday() {
    this.date = this.calendar.getToday();
  }

  calcHrs() {
    console.log(this.date);
    console.log(this.start_time);

    var selected_from_date = FORMAT.format_date_time(
      this.date?.year,
      this.date?.month,
      this.date?.day,
      this.start_time.hour,
      this.start_time.minute
    );
    var selected_to_date = FORMAT.format_date_time(
      this.date?.year,
      this.date?.month,
      this.date?.day,
      this.end_time.hour,
      this.end_time.minute
    );

    console.log(selected_from_date);
    console.log(selected_to_date);
    var diff = TIME_METHODS.getDataDiff(
      new Date(selected_from_date),
      new Date(selected_to_date)
    );

    this.caclHrs = diff.hour + 'h ' + diff.minute + 'min ';
  }

  updateRecord(item: any) {
    this.isEdit = true;
    console.log(item);
    this.timesheet.id = item.id;
    this.timesheet.userId = item.userId;
    // this.timesheet.managerId = item.managerId;
    //2023-3-14
    this.date = {
      day: Number(item.date.toString().split('-')[2]),
      year: Number(item.date.toString().split('-')[0]),
      month: Number(item.date.toString().split('-')[1]),
    };
    this.projectName = item.projectName;
    this.taskId = item.task;
    this.timesheet.createdBy = item.createdBy;
    this.timesheet.updatedBy = item.updatedBy;
    this.start_time = {
      hour: Number(item.startTime.split(':')[0]),
      minute: Number(item.startTime.split(':')[1]),
    };
    this.end_time = {
      hour: Number(item.endTime.split(':')[0]),
      minute: Number(item.endTime.split(':')[1]),
    };
    this.caclHrs = item.calHrs;
    this.description = item.description;
  }

  updateTimesheet() {
    this.timesheet.date = FORMAT.format_date(
      this.date?.year,
      this.date?.month,
      this.date?.day
    );
    this.timesheet.startTime = FORMAT.format_time(
      this.start_time.hour,
      this.start_time.minute
    );
    this.timesheet.endTime = FORMAT.format_time(
      this.end_time.hour,
      this.end_time.minute
    );
    this.timesheet.calHrs = this.caclHrs.toString().trim();
    let projId = '0';
    this.projects.filter((x: any) => {
      // 627: IWBI Testing
      if (x.split(':')[1].trim() == this.projectName) {
        console.log(x);
        projId = x.split(':')[0].trim();
      }
    });
    this.timesheet.projectId = projId;
    this.timesheet.task = this.taskId;
    this.timesheet.description = this.description;
    this.timesheet.billable=this.billable;
    this.timesheet.createdBy = this.userId;
    this.timesheet.updatedBy = this.userId;
    console.log(this.timesheet);
    this.timesheetService.updateTimeSheet(this.timesheet).subscribe((res) => {
      console.log(res);
      this.getTimeSheetByUserIdAndApproval();
    });

    this.clearFields();
    this.offcanvasService.dismiss();
    this.isEdit = false;
  }

  recordList: timesheet[] = new Array();
  timesheet: timesheet = new timesheet();

  pushRecord(type: string) {
    console.log(this.date);
    console.log(this.start_time);
    //Setting up the current value
    this.timesheet.date = FORMAT.format_date(
      this.date?.year,
      this.date?.month,
      this.date?.day
    );
    this.timesheet.projectId = this.projectName;
    this.timesheet.task = this.taskId;
    this.timesheet.startTime = FORMAT.format_time(
      this.start_time.hour,
      this.start_time.minute
    );
    this.timesheet.endTime = FORMAT.format_time(
      this.end_time.hour,
      this.end_time.minute
    );
    this.timesheet.calHrs = this.caclHrs.toString().trim();
    this.timesheet.description = this.description;
    this.timesheet.createdBy = this.userId;
    this.timesheet.updatedBy = this.userId;
    //Validations
    if (this.date == undefined || this.date == null) {
      this.toaster.showRequiredError('ERROR:', 'Date');
      return;
    }
    if (
      this.projectName == undefined ||
      this.projectName == null ||
      this.projectName == ''
    ) {
      this.toaster.showRequiredError('ERROR:', 'Project');
      return;
    }
    const element = this.timesheet.projectId;
    if (!this.temp.includes(element)) {
      console.log(this.temp);
      this.toaster.showInvalidError('ERROR:', 'Project');
      // this.clearFields();
      return;
    }
    if (this.taskId == undefined || this.taskId == null || this.taskId == '') {
      this.toaster.showRequiredError('ERROR:', 'Task');
      return;
    }
    if (!tasks.includes(this.taskId)) {
      this.toaster.showInvalidError('ERROR:', 'Task');
      // this.clearFields();
      return;
    }
    if (
      this.timesheet.startTime == undefined ||
      this.timesheet.startTime == null ||
      this.timesheet.startTime == ''
    ) {
      this.toaster.showRequiredError('ERROR:', 'Start Time');
      return;
    }
    if (
      this.timesheet.endTime == undefined ||
      this.timesheet.endTime == null ||
      this.timesheet.endTime == ''
    ) {
      this.toaster.showRequiredError('ERROR:', 'End Time');
      return;
    }
    if (
      this.description == undefined ||
      this.description == null ||
      this.description == ''
    ) {
      this.toaster.showRequiredError('ERROR:', 'Description');
      return;
    }
    this.timesheet.userId = this.userId;
    this.timesheet.managerId = this.managerId;
    this.timesheet.billable = this.billable;
    let projId = 0;
    this.projects.filter((x: any) => {
      // 627: IWBI Testing
      if (x.split(':')[1].trim() == this.projectName) {
        console.log(x);
        projId = x.split(':')[0].trim();
      }
    });
    this.timesheet.projectId = String(projId);

    //Push the current record
    // this.recordList.push(this.timesheet);
    console.log(this.timesheet);
    this.timesheetService.addTimesheet(this.timesheet).subscribe((res: any) => {
      console.log(res);
      if (res.status == 1) {
        this.toaster.showError('ERROR: ', res.message);
        return;
      } else {
        this.getTimeSheetByUserIdAndApproval();
        //Reseting fields
        this.clearFields();
      }
    });

    //Final array
    // console.log(this.recordList);

    if (type == 'Close') this.offcanvasService.dismiss();
  }
  deleteTimeSheetById(id: any) {
    this.timesheetService.deleteTimeSheetById(id).subscribe((result) => {
      console.log(result);
      this.getTimeSheetByUserIdAndApproval();
    });
    this.clearFields();
    this.offcanvasService.dismiss();
  }
  //SubmitTimeSheet
  submitTimeSheet() {
    console.log(this.recordList);
    this.timesheetService.submitTimeSheet(this.recordList).subscribe((res) => {
      console.log(res);
      this.getTimeSheetByUserIdAndApproval();
      // this.reloadPage();
      this.router.navigateByUrl('pro-timesheet/timesheet/my-timesheet');
    });
  }
  reloadPage() {
    window.location.reload();
  }
  clearFields() {
    this.caclHrs = '';
    this.projectName = '';
    this.taskId = '';
    this.description = '';
    this.date = undefined;
  }
}
