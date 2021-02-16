import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  status = <any>[];
  message = '';
  validUsers = [
    { name: 'Khaansaab', password: 'khaansaab@1', level: 1 },
    { name: 'Khaansaab', password: 'khaansaab@12', level: 2 },
    { name: 'Khaansaab', password: 'khaansaab@123', level: 3 }
  ]
  user = {
    name: '',
    password: ''
  }

  constructor(private route: Router, private alert: AlertController, private service: AuthenticationService) { }

  ngOnInit() {
  }

  Login() {

    for (let i = 0; i < this.validUsers.length; i++) {

      if (this.user.name.toLowerCase() == this.validUsers[i].name.toLowerCase() && this.user.password == this.validUsers[i].password) {

        this.status = this.validUsers[i].level
        sessionStorage.setItem('loginStatus', this.status)
        break

      }

      else if (this.user.name.toLowerCase() == "admin" && this.user.password == "admin") {
        this.route.navigate(['/admindashboard'])
      }

      else {

        this.status = 0
        sessionStorage.setItem('loginStatus', this.status)

      }
    }

    if (this.status != 0) {

      this.message = ''
      this.route.navigate(['layout']);

    }

    else {

      this.message = 'Please enter valid Username and Password'

    }

    this.service.loginUpdate(this.status,this.user.name)
  }
}

