import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/pages/login/login.service';
import { CommonService } from 'src/app/services/common.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private commonService: CommonService,
    private router: Router,
    private loginService: LoginService,
    public datePipe: DatePipe
  ) { }

  loggedInUserId: number = 0;
  todayDate =this.datePipe.transform((new Date), 'dd/MM/yyyy h:mm:ss');//Date.now()//this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss')
  today = new Date();
  todayName = this.today.toLocaleString('en-us', { weekday: 'long' });
  ngOnInit(): void {
    this.loggedInUserId = this.commonService.loggedInUserId();
    this.getUserById();
    setInterval(() => {
      this.todayDate = this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss');
    }, 1000);
  }

  signOut() {
    sessionStorage.clear();
  }

  gotoDashboard() {
    this.router.navigateByUrl(
      '/pro-timesheet/dashboard/' + this.loggedInUserId
    );
  }
  userDetails:any

  getUserById() {
    this.loginService.getUserById(this.loggedInUserId).subscribe((res) => {
      console.log(res);
      this.userDetails=res
    });
  }
}
