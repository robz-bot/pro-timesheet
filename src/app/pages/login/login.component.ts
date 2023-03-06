import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/models/login';
import { ToasterService } from 'src/app/services/toaster.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private toaster: ToasterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // sessionStorage.clear()
  }

  showPassword: boolean = false;
  userEmail: string = '';
  userPassword: string = '';
  passwordType: string = 'password';

  onKey(event: any) {
    this.passwordType = event.target.type;
  }

  togglePassword(type: string) {
    if (type == 'show') {
      this.passwordType = 'text';
      this.showPassword = true;
    } else if (type == 'hide') {
      this.passwordType = 'password';
      this.showPassword = false;
    }
  }

  loginReq: login = new login();
  loginResData: any;
  loginTimesheet() {
    if (
      this.userEmail == '' ||
      this.userEmail == null ||
      this.userEmail == undefined
    ) {
      this.toaster.showRequiredError('ERROR:', 'User Name');
      return;
    }
    if (
      this.userPassword == '' ||
      this.userPassword == null ||
      this.userPassword == undefined
    ) {
      this.toaster.showRequiredError('ERROR:', 'Password');
      return;
    }

    this.loginReq.email = this.userEmail;
    this.loginReq.password = this.userPassword;
    console.log(this.loginReq);
    this.loginService.LoginUser(this.loginReq).subscribe((data: any) => {
      console.log(data);
      this.loginResData = data;
      if (this.loginResData.status == 0) {
        //Login success
        this.setSessionValues(this.loginResData);
        this.toaster.showSuccess('SUCCESS:', this.loginResData.message);
        this.router.navigateByUrl('/pro-timesheet/dashboard/'+this.loginResData.id);
      } else {
        this.toaster.showError('ERROR:', this.loginResData.message);
      }
    });
  }

  setSessionValues(data: any) {
    sessionStorage.setItem('userId', data.id);
    sessionStorage.setItem('managerId', data.managerId);
    sessionStorage.setItem('businessUnitId', data.businessUnitId);
  }
}
