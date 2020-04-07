import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { User } from '../models/user';
import { Repository } from '../models/repository'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userProfile: User;
  reposList: any;
  userRepos: Repository;
  myUserName: string;
  apiUrl: string = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { 
    this.userProfile = new User ('', '', '', '', 0, '', '', new Date(), 0, 0);
    this.userRepos = new Repository ('', '', '');
  }

  getMyData(){
    interface ApiResponse{
      login: string;
      avatar_url: string;
      html_url: string
      bio: string;
      public_repos: number;
      hireable: string;
      location: string;
      created_at: Date;
      followers: number;
      following: number;
  }

  const promise = new Promise((resolve) => {
    this.myUserName = 'Brenda-M';
    this.http.get<ApiResponse>(this.apiUrl + this.myUserName + '?access_token=' + environment.accessToken).toPromise().then(response => {
        this.userProfile.login = response.login;
        this.userProfile.html_url = response.html_url;
        this.userProfile.login = response.login;
        this.userProfile.bio = response.bio;
        this.userProfile.hireable = response.hireable;
        this.userProfile.avatar_url = response.avatar_url;
        this.userProfile.location = response.location;
        this.userProfile.public_repos = response.public_repos;
        this.userProfile.created_at = response.created_at;
        this.userProfile.followers = response.followers;
        this.userProfile.following = response.following;
        resolve();
    });
  });
    return promise;
  }

  getMyRepos(){
    interface ApiRepositoryResponse{
      name: string;
      description: string;
      html_url: string;
    }

    const repoPromise = new Promise((resolve, reject) => {
      this.http.get<ApiRepositoryResponse>(this.apiUrl+ this.myUserName + '/repos?order=created&sort=asc?access_token=' + environment.accessToken).toPromise().then(RepoResponse => {
        this.reposList = RepoResponse;
        resolve();
      })
    })


  }

}
