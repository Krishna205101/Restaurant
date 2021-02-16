import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

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
  customersList: any;
  url: string;
  List: any;
  disabled = false;

  constructor(private http: HttpClient, private service: EventService) {

    service.getEventInfo()

    service.List.subscribe(x => {
      this.customersList = x
      this.List = x
    })

    this.totalRecords = this.customersList.length

  }

  Listing(ev: any, customer) {

    const val = ev.target.checked
    if (val == true) {
      this.selectedList.push(customer)
    }

    else {
      for (let i = 0; i < this.selectedList.length; i++) {
        if (this.selectedList[i]["PhoneNumber"] == customer.PhoneNumber) {
          this.selectedList.splice(i, 1)
        }
      }
      this.bulkCheck = false
    }

    if(this.selectedList != []){
      this.disabled = true;
    }
    console.log(this.selectedList)
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

    let string = '';
    let length = this.selectedList.length

    for (let i = 0; i < length - 1; i++) {
      string = string + this.selectedList[i].PhoneNumber + ','
    }

    string = string + this.selectedList[length - 1].PhoneNumber
    console.log(string)
    this.url = 'http://websmsapp.in/api/mt/SendSMS?APIKEY=hh9Jz9ll5UOT2WwoNrr6JQ&senderid=KANSAB&channel=Promo&DCS=0&flashsms=0&number=' + string + '&text=test-message&route=4'
    this.http.get(this.url).subscribe(x => {
    })
  }

  sendSms(customer) {

    this.url = 'http://websmsapp.in/api/mt/SendSMS?APIKEY=hh9Jz9ll5UOT2WwoNrr6JQ&senderid=KANSAB&channel=Promo&DCS=0&flashsms=0&number=' + customer.PhoneNumber + '&text=test-message&route=4'
    this.http.get(this.url).subscribe(x => {
    })

  }

  pageChange(ev: any) {

    this.selectedList = []
    this.page = ev
    this.bulkCheck = false
    this.check = false

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

  ngOnInit() {
  }

}
