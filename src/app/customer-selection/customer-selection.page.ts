import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-selection',
  templateUrl: './customer-selection.page.html',
  styleUrls: ['./customer-selection.page.scss'],
})
export class CustomerSelectionPage implements OnInit {


  selectedList = <any>[];
  page = 1;
  totalRecords: number;
  check = false;
  bulkCheck = false;
  customerList: any;
  url: string;

  constructor(private authService: AuthenticationService, private http: HttpClient, private customerService: CustomerService) {
    this.totalRecords = this.selectedList.length

    customerService.shareList.subscribe(x => {
      this.customerList = x
    })

  }

  Listing(ev: any, customer) {

    const val = ev.target.checked
    if (val == true) {
      this.selectedList.push(customer)
      console.log(val)
      console.log(this.selectedList)
    }

    else {
      for (let i = 0; i < this.selectedList.length; i++) {
        if (this.selectedList[i]["PhoneNumber"] == customer.PhoneNumber) {
          this.selectedList.splice(i, 1)
          console.log(this.selectedList)
        }
      }
      this.bulkCheck = false
    }

  }

  selectAll(ev: any) {

    const val = ev.target.checked
    if (val == true) {
      this.check = true
    }

    else {
      this.check = false
    }

  }

  sendBulksms() {

    console.log(this.selectedList)
    this.selectedList = []
  
  }

  sendSms(customer) {

    console.log(customer)
    this.url='http://websmsapp.in/api/mt/SendSMS?APIKEY=hh9Jz9ll5UOT2WwoNrr6JQ&senderid=KANSAB&channel=Promo&DCS=0&flashsms=0&number='+customer.PhoneNumber+'&text=test-message&route=4'
    this.http.get(this.url).subscribe(x=>{
      console.log(x)
    })

  }

  pageChange(ev: any) {

    this.selectedList = []
    this.page = ev
    this.bulkCheck = false
    this.check = false
  
  }

  ngOnInit() {
  }

}
