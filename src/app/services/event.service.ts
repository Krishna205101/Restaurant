import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsList = new BehaviorSubject<any>([]);

  public List= this.eventsList.asObservable();

  constructor(private http: HttpClient) { 
    this.getEventInfo()
  }

  addEvent() {

  }

  getEventInfo() {
    this.http.post(environment.baseurl+'Event/Types', { title: 'Event' }).toPromise().then(x => {
      console.log(x)
      this.eventsList.next(x)
    }) 
  }


}
