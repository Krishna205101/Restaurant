import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor(private router:Router,private service: AuthenticationService) {
    
   }
  
   logout(){
     sessionStorage.setItem('loginStatus','0')
     this.router.navigate(['/']);
   }
  ngOnInit() {
  }

}
