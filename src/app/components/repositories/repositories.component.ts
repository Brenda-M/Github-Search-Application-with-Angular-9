import { Component, OnInit } from '@angular/core';
import { GithubReposService } from '../../services/github-repos.service';
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos: Repository;
  view: number;
  repoSearchName: string;

  constructor(public searchReposService:  GithubReposService) { 
    this.repos = new Repository('', '', '', '', '', 0, 0, new Date());
  }

  
  findRepo(value){
    this.searchReposService.searchRepos(this.repoSearchName);
  }

  loadMore(){
    this.searchReposService.updateView(this.view);
    this.searchReposService.searchRepos(this.repoSearchName);
  };

  ngOnInit(){

  }

}
