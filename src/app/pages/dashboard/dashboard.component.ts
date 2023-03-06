import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.commonService.getUserId())
    this.commonService.getUserId() == true
      ? ''
      : this.router.navigateByUrl('/pro-timesheet/login');
  }
}
