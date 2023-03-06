import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './shared-components/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { TimesheetCurrentComponent } from './pages/timesheet-current/timesheet-current.component';
import { TimesheetWaitComponent } from './pages/timesheet-wait/timesheet-wait.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 150000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
