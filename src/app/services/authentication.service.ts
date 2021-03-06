import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private status=new BehaviorSubject(null);
  private username=new BehaviorSubject<any>([]);

  public level=this.status.asObservable();
  public user=this.username.asObservable();
  
  constructor(private alert : AlertController) {
    this.status.next(parseInt(sessionStorage.getItem('loginStatus')))
  }

  loginUpdate(level,data){
    this.status.next(parseInt(sessionStorage.getItem('loginStatus')))
    this.username = data
  }

  async declineAlert(){
    const alert = await this.alert.create({
      message:'<div class="left"><ion-icon name="alert-circle"></ion-icon></div> <div class="right"> Authorized only!</div>',
      cssClass:"alert",
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            
          }
        }
      ]
    });
    await alert.present();
  }
}

