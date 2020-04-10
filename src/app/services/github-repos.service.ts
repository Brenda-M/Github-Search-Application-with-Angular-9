import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Repository } from '../models/repository';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  userRepos: Repository;
  findRepos: any;
  repoName: string;
  repoApiUrl: string = 'https://api.github.com/search/'
  

  constructor(private http: HttpClient) { 
    // this.repoSearchName = "hello-world";
  }

  searchRepos(repoSearchName){
    interface SearchRepoResponse{
       list: Repository;
    }

    const promise = new Promise((resolve, reject) => {
      this.http.get<SearchRepoResponse>(this.repoApiUrl + 'repositories?q=' + repoSearchName + '&per_page=10&access_token=' + environment.accessToken).toPromise().then(getRepositories => {
        this.findRepos = getRepositories;
        console.log(this.findRepos)
        resolve()
      });
    });
  }
 
}
