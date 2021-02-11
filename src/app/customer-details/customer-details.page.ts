import { Component, OnInit, PipeTransform } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})
export class CustomerDetailsPage implements OnInit {

  details: any = [];
  constructor(private service: CustomerService, private modalContoller: ModalController) {
    service.shareDetails.subscribe(x => this.details = x)
  }

  dismiss() {
    this.modalContoller.dismiss()
  }
  ngOnInit() {
  }

}
