import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  userName: string;
  userProfile: User;

  constructor(public userService: ProfileService) { }

  ngOnInit(){
    this.userService.getUserInfo();
    this.userProfile = this.userService.userProfile;
  }

}
