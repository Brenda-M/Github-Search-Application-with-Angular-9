import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../services/profile.service';
import {  GithubReposService } from '../../services/github-repos.service';
import { User } from 'src/app/models/user';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: User;
  userName: string;
  repoName: string;
  foundRepos: any;
  repoSearchName: string;
  repoList: Repository;

  constructor(public userService: ProfileService, public repoService: ProfileService, public searchReposService:  GithubReposService) { }

  findUser(value){
    this.userService.updateProfile(this.userName);
    this.ngOnInit();
  }

  

  ngOnInit() {
    this.userService.getUserInfo();
    this.userProfile = this.userService.userProfile;
    this.repoService.getRepos(); 
    this.searchReposService.searchRepos(this.repoSearchName);
  }

}
