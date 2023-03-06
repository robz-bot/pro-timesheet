import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { TimesheetCurrentComponent } from './pages/timesheet-current/timesheet-current.component';
import { TimesheetWaitComponent } from './pages/timesheet-wait/timesheet-wait.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './shared-components/home/home.component';

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
