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
  searchResults:  Repository;
  repoName: string;
  repoApiUrl: string = 'https://api.github.com/search/'
  

  constructor(private http: HttpClient) { 
    this.searchResults = new Repository ('', '', '', '', '', 0, 0)
  }

  searchRepos(repoSearchName){
    interface SearchRepoResponse{
      name: string;
      description: string;
      html_url: string;
      owner: any,
      language: string,
      forks_count: number,
      watchers_count: number, 
    }

    const promise = new Promise((resolve, reject) => {
      this.http.get<SearchRepoResponse>(this.repoApiUrl + 'repositories?q=' + repoSearchName + '&per_page=10&access_token=' + environment.accessToken).toPromise().then(getRepositories => {
        this.searchResults = getRepositories;
        console.log(this.searchResults)
        resolve()
      });
    });
  } 
}
