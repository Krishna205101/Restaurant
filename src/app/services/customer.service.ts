import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private details = new BehaviorSubject<any>([]);
  private List = new BehaviorSubject<any>([]);


  public shareDetails = this.details.asObservable();
  public shareList = this.List.asObservable();

  constructor(private http: HttpClient) {

    
  }

  customerDetails(any: []) {
    this.details.next(any);
  }

  customerList() {
    this.http.post(environment.baseurl+'Customer/List', { title: 'POST' }).toPromise().then(data => {
      this.List.next(data)
    })
  }



  editCustomer(customer) {
    this.http.post(environment.baseurl + 'Customer/Details', { PhoneNumber: customer.PhoneNumber }).toPromise()
  }

  deleteCustomer(customer) {
    this.http.post(environment.baseurl + 'Customer/Delete', { PhoneNumber: customer.PhoneNumber }).toPromise()
  }
}