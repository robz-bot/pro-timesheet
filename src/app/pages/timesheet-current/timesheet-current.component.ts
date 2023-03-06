import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  NgbCalendar,
  NgbDateStruct,
  NgbOffcanvas,
} from '@ng-bootstrap/ng-bootstrap';
import { FORMAT, TIMESHEET_INFO, TIME_METHODS } from 'src/app/constant';
import { TimesheetSave } from 'src/app/models/timesheet';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-timesheet-current',
  templateUrl: './timesheet-current.component.html',
  styleUrls: ['./timesheet-current.component.css'],
})
export class TimesheetCurrentComponent implements OnInit {
  constructor(
    private offcanvasService: NgbOffcanvas,
    private calendar: NgbCalendar,
    private toaster: ToasterService
  ) {}
  currentTimesheetInfo: string = TIMESHEET_INFO.TIMESHEET_CURRENT;

  closeResult: string = '';
  date: NgbDateStruct | undefined;

  start_time = { hour: 10, minute: 30 };
  end_time = { hour: 11, minute: 30 };
  meridian = true;

  // Form Models Declarations
  caclHrs: string = '';
  projectId: string = '';
  taskId: string = '';
  description: string = '';

  ngOnInit(): void {}

  openNoBackdrop(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { backdrop: false, position: 'end' });
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

  recordList: TimesheetSave[] = new Array();
  timesheet: TimesheetSave = new TimesheetSave();

  pushRecord() {
    //Setting up the current value
    this.timesheet.date = FORMAT.format_date(
      this.date?.year,
      this.date?.month,
      this.date?.day
    );
    this.timesheet.projectId = this.projectId;
    this.timesheet.taskId = this.taskId;
    this.timesheet.startTime = FORMAT.format_time(
      this.start_time.hour,
      this.start_time.minute
    );
    this.timesheet.endTime = FORMAT.format_time(
      this.end_time.hour,
      this.end_time.minute
    );
    this.timesheet.calHrs = this.caclHrs.toString().trim();
    this.timesheet.desc = this.description;

    //Validations
    if (this.date == undefined || this.date == null) {
      this.toaster.showRequiredError('ERROR:', 'Date');
      return;
    }
    if (
      this.projectId == undefined ||
      this.projectId == null ||
      this.projectId == ''
    ) {
      this.toaster.showRequiredError('ERROR:', 'Project');
      return;
    }
    if (this.taskId == undefined || this.taskId == null || this.taskId == '') {
      this.toaster.showRequiredError('ERROR:', 'Task');
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

    //Push the current record
    this.recordList.push(this.timesheet);
    console.log(this.timesheet);
    //Final array
    console.log(this.recordList);
  }
}
