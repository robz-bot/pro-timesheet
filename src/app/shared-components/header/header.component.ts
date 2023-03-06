import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/pages/login/login.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private commonService: CommonService,
    private router: Router,
    private loginService: LoginService
  ) {}

  loggedInUserId: number = 0;
  ngOnInit(): void {
    this.loggedInUserId = this.commonService.loggedInUserId();
    this.getUserById();
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
