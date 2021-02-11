import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventsList = <any>[];
  constructor() {
    
  }

  ngOnInit() {
  }

}
