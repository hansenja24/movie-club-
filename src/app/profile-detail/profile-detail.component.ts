import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css'],
  providers: [UserService]
})
export class ProfileDetailComponent implements OnInit {
  userId: string;
  userDisplay;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private userService: UserService) {
              }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
    });
    this.userDisplay = this.userService.getUserById(this.userId);
    console.log(this);
  }

}
