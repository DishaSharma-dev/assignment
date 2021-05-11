import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicationServiceService } from './application-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userData = null;
  token?: string | null;
  constructor(private router: Router, private api: ApplicationServiceService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot):  any  {
      this.api.getTaskInfo().subscribe((data) => {

        this.token = sessionStorage.getItem('token');
        let usn = sessionStorage.getItem('usn');
        this.userData = data.find((val: any) => val.usn == usn);
        if (this.userData!=null && this.token) {
          // this.common.loginEmit = true;

          return true;
        } else {
          this.router.navigate(['login']);
          // this.common.loginEmit = false;
          return false;

        }
      }, (err) => { })

  }

}
