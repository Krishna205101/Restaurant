import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SendSmsGuard implements CanActivate {
  level=0;
  constructor(private authenticationService: AuthenticationService, private route: Router) {

    this.authenticationService.level.subscribe(x=>{
      this.level=x
    })

   }


  canActivate(state: ActivatedRouteSnapshot) {

    if( this.level > 1){
      return true
    }

    else if(this.level==null || this.level==0){
      return this.route.parseUrl('/')
    }

    
    else{
      this.authenticationService.declineAlert()
      return false
    }
  }
  
}
