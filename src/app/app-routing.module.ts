import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { MyTimesheetComponent } from './pages/my-timesheet/my-timesheet.component';
import { TimesheetCurrentComponent } from './pages/timesheet-current/timesheet-current.component';
import { TimesheetWaitComponent } from './pages/timesheet-wait/timesheet-wait.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './shared-components/home/home.component';
import { ManagerHistoryComponent } from './pages/history/manager-history/manager-history.component';
import { ApprovedHistoryComponent } from './pages/history/approved-history/approved-history.component';
import { RejectHistoryComponent } from './pages/history/reject-history/reject-history.component';
import { HolidayComponent } from './pages/holiday/holiday.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'pro-timesheet',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard/:id',
        component: DashboardComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'timesheet',
        component: TimesheetCurrentComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'timesheet/current',
        component: TimesheetCurrentComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'timesheet/wait',
        component: TimesheetWaitComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'timesheet/manager-history',
        component: ManagerHistoryComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'timesheet/approved-history',
        component: ApprovedHistoryComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'timesheet/rejected-history',
        component: RejectHistoryComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'timesheet/holiday',
        component: HolidayComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'timesheet/my-timesheet',
        component: MyTimesheetComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'pro-timesheet/login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   component: LoginComponent,
  //   pathMatch: 'full',
  // },
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
