import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsList = new BehaviorSubject<any>([]);
  private eventTypes = new BehaviorSubject<any>([]);

  public List= this.eventsList.asObservable();
  public EventTypesList = this.eventTypes.asObservable();

  constructor(private http: HttpClient) { 

    
  }

  addEvent() {

  }

  getEvents(){
    this.http.post(environment.baseurl+'Event/Types', { title: 'EventTypes' }).toPromise().then(x => {
      this.eventTypes.next(x)
    })
  }

  getEventInfo() {
    this.http.post(environment.baseurl+'Event/UpcomingEvents', { title: 'Event' }).toPromise().then(x => {
      this.eventsList.next(x)
    }) 
  }


}
