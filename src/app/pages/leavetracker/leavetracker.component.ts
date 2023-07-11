import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leavetracker',
  templateUrl: './leavetracker.component.html',
  styleUrls: ['./leavetracker.component.css']
})
export class LeavetrackerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enableApplyLeaveComponent: boolean = true;
  enableListLeaveComponent: boolean = false;

  renderComponent(type: string) {
    if (type == 'apply') {
      this.enableApplyLeaveComponent = true
      this.enableListLeaveComponent = false
    }
    if (type == 'list') {
      this.enableApplyLeaveComponent = false
      this.enableListLeaveComponent = true
    }
  }

}
