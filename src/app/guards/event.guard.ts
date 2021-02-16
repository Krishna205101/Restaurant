import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EventGuard implements CanActivate {
  level = 0;
  constructor(private authenticationService: AuthenticationService, private route: Router) {

    this.authenticationService.level.subscribe(x => {
      this.level = parseInt(x)
    })

  }


  canActivate(state: ActivatedRouteSnapshot) {

    if (this.level > 2) {
      return true
    }

    else if (this.level == 0 || this.level == null) {
      return this.route.parseUrl('/')
    }

    else {
      this.authenticationService.declineAlert()
      return false
    }
  }

}
