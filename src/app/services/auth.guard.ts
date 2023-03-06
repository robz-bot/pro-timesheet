import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private commonService: CommonService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    var isHasUserDet = this.commonService.getUserId();
    console.log(isHasUserDet)
    if (!isHasUserDet) {
      sessionStorage.clear();
      this.router.navigateByUrl('/pro-timesheet/login');
    }
    return isHasUserDet;
  }
}
