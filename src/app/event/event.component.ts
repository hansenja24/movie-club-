import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [EventService]
})
export class EventComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  submitForm(title: string, time: string, description: string) {
    var newEvent: Event = new Event(title, time, description);
    this.eventService.addEvent(newEvent);
  }
}
