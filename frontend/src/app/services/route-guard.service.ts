import { Injectable } from '@angular/core';
import { AuthenticateService } from './authenticate.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authService: AuthenticateService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authService.checkAlreadyLogin()) return true

    this.router.navigate(['authenticate'])
    return false
  }
}
