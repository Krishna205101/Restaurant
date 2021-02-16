import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ModalController } from '@ionic/angular';
import { CustomerDetailsPage } from '../customer-details/customer-details.page';
import { FeedbackPage } from '../feedback/feedback.page';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  customersList = <any>[];
  List = <any>[];
  page = 1;
  totalCustomers: number;


  constructor(private service: CustomerService, private modalController: ModalController) {


    this.service.customerList()
    this.service.shareList.subscribe(x => {
      this.customersList = x
      this.List = x
    })

    this.totalCustomers = this.customersList.length
  }



  async Moredetails(data) {
    this.service.customerDetails(data)
    const modal = await this.modalController.create({
      component: CustomerDetailsPage,
    });
    return await modal.present();

  }

  search(ev: any) {
    this.customersList = this.List
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.customersList = this.customersList.filter((item) => {
        return (item.FirstName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  async Add() {
    const modal = await this.modalController.create({
      component: FeedbackPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();

  }

  editCustomer(customer) {
    this.service.editCustomer(customer)
  }

  deleteCustomer(customer) {
    this.service.deleteCustomer(customer)
  }

  ngOnInit() {

  }

}
