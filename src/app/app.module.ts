import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './shared-components/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
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
