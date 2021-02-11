import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CustomerDetailsPage } from '../customer-details/customer-details.page';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  level=0;
  constructor(private auth: AuthenticationService, private route: Router) {
    this.auth.level.subscribe(x=>{
      this.level=x
      console.log(x)
    })
   }


  canActivate(state: ActivatedRouteSnapshot) {

    if(this.level > 0){
      return true
    }
    else{
      console.log(this.level)
      return this.route.parseUrl('/');
    }
  }


}
