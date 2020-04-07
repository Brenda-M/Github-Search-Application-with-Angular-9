import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
// import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  userProfile: User;
  // userName: string;
  // apiUrl: string = 'https://api.github.com/users/';
  // apiKey: string = "environment.accessToken";

  constructor(public profileService: ProfileService) {
  }


  ngOnInit() {
    this.profileService.getMyData();
    this.userProfile = this.profileService.userProfile;
    console.log(this.userProfile)


    // interface ApiResponse{
    //   login: string;
    //   avatar_url: string;
    //   followers: number;
    //   following: number;
    //   bio: string;
    //   repos: number;
    // }

    // this.userName = "Brenda-M";
    // this.http.get<ApiResponse>(this.apiUrl + this.userName + "?access_token=" + environment.accessToken).subscribe(data => {
    //   this.userProfile = new User (data.login, data.avatar_url, data.followers, data.following, data.bio,data.repos)
    // })

  }
}
