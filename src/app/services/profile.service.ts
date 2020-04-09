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
  userName: string;
  repoName: string;
  reposList: any;
  findRepos: any;
  userRepos: Repository;
  myUserName: string;
  apiUrl: string = 'https://api.github.com/users/';
  repoApiUrl: string = 'https://api.github.com/search/'

  constructor(private http: HttpClient) { 
    this.userProfile = new User ('', '', '', '', 0, '', '', new Date(), 0, 0);
    this.userRepos = new Repository ('', '', '');
    this.myUserName = 'Brenda-M';
  }

  getMyData(){
    interface ApiUserResponse{
      login: string;
      avatar_url: string;
      html_url: string;
      bio: string;
      public_repos: number;
      hireable: string;
      location: string;
      created_at: Date;
      followers: number;
      following: number;
  }

  const promise = new Promise((resolve, reject) => {
    this.http.get<ApiUserResponse>(this.apiUrl + this.myUserName + '?access_token=' + environment.accessToken).toPromise().then(userResponse => {
        this.userProfile.login = userResponse.login;
        this.userProfile.html_url = userResponse.html_url;
        this.userProfile.bio = userResponse.bio;
        this.userProfile.hireable = userResponse.hireable;
        this.userProfile.avatar_url = userResponse.avatar_url;
        this.userProfile.location = userResponse.location;
        this.userProfile.public_repos = userResponse.public_repos;
        this.userProfile.created_at = userResponse.created_at;
        this.userProfile.followers = userResponse.followers;
        this.userProfile.following = userResponse.following;
        resolve();
    });
  });
    return promise;
  }

  updateProfile(userName){
    this.myUserName = userName;
  }

  getMyRepos(){
    interface ApiRepositoryResponse{
      name: string;
      description: string;
      html_url: string;
    }

    const repoPromise = new Promise((resolve, reject) => {
      this.http.get<ApiRepositoryResponse>(this.apiUrl+ this.myUserName + '/repos?access_token=' + environment.accessToken).toPromise().then(RepoResponse => {
        this.reposList = RepoResponse;
        resolve();
      });
    });

  }

  // search by repository functionality
  searchRepos(){
    interface SearchRepoResponse{
       list:any;
    }

    const promise = new Promise((resolve, reject) => {
      this.http.get<SearchRepoResponse>(this.repoApiUrl + 'repositories?q=' + 'hello' + '&per_page=10' + environment.accessToken).toPromise().then(getRepositories => {
        this.findRepos = getRepositories;
        console.log(this.findRepos)
        resolve()
      });
    });
    // const repoPromise = new Promise((resolve, reject) => {
    //   this.http.get<SearchRepoResponse>(this.repoApiUrl+ 'repositories?q=names:' + 'hello').toPromise().then(RepoResponse => {
    //     this.findRepos = RepoResponse;
    //     console.log(this.findRepos)
    //     resolve();
    //   });
    // });
  }

}
