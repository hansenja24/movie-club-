import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [EventService]
  })

  export class WelcomeComponent implements OnInit {
  events: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
