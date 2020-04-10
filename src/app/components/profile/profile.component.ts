import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../services/profile.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: User;

  constructor(public userService: ProfileService) { }

  ngOnInit() {
    this.userService.getUserInfo();
    this.userProfile = this.userService.userProfile;
  }

}
