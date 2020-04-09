import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

import { User } from '../../models/user';
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  userProfile: User;
  reposList: any;
  userName: string;
  repoName: Repository;
  findRepos: string;
  resultCount: number;
  showUserForm: boolean = false;
  showRepoForm: boolean = false;
  @ViewChild ('userForm') form: any;

  constructor(public userService: ProfileService, public repoService: ProfileService) {
  }

  findUser(value){
    this.userService.updateProfile(this.userName);
    this.ngOnInit();
    this.form.reset();
  }

   getRepositories(value){
    this.findRepos = '';
    this.resultCount = 10;
    console.log(this.findRepos)
  }

  ngOnInit() {
    this.userService.getMyData();
    this.userProfile = this.userService.userProfile;
    this.repoService.getMyRepos();
  }

 
}
