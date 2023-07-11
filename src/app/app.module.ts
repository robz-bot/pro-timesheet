import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './shared-components/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbCollapseModule, NgbModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { TimesheetCurrentComponent } from './pages/timesheet-current/timesheet-current.component';
import { TimesheetWaitComponent } from './pages/timesheet-wait/timesheet-wait.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyTimesheetComponent } from './pages/my-timesheet/my-timesheet.component';
import { DonutChartComponent } from './pages/charts/donut-chart/donut-chart.component';
import { BarChartComponent } from './pages/charts/bar-chart/bar-chart.component';
import { CommonModule, DatePipe } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BirthdayComponent } from './pages/occasions/birthday/birthday.component';
import { AnniversaryComponent } from './pages/occasions/anniversary/anniversary.component';
import { ManagerHistoryComponent } from './pages/history/manager-history/manager-history.component';
import { RejectHistoryComponent } from './pages/history/reject-history/reject-history.component';
import { ApprovedHistoryComponent } from './pages/history/approved-history/approved-history.component';
import { HolidayComponent } from './pages/holiday/holiday.component';
import { ChennaiCalComponent } from './pages/holiday/chennai-cal/chennai-cal.component';
import { BillablechartComponent } from './pages/charts/billablechart/billablechart.component';
import { LeavetrackerComponent } from './pages/leavetracker/leavetracker.component';
import { ListleaveComponent } from './pages/leavetracker/listleave/listleave.component';
import { NewleaveComponent } from './pages/leavetracker/newleave/newleave.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    TimesheetComponent,
    TimesheetCurrentComponent,
    TimesheetWaitComponent,
    FooterComponent,
    MyTimesheetComponent,
    DonutChartComponent,
    BarChartComponent,
    BirthdayComponent,
    AnniversaryComponent,
    ManagerHistoryComponent,
    RejectHistoryComponent,
    ApprovedHistoryComponent,
    HolidayComponent,
    ChennaiCalComponent,
    BillablechartComponent,
    LeavetrackerComponent,
    ListleaveComponent,
    NewleaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    NgApexchartsModule,
    NgbPaginationModule,
    NgbCollapseModule,
    ToastrModule.forRoot({
      timeOut: 150000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
