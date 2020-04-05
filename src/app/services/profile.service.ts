import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  apiUrl: string = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  getUsers() : Observable <User []>{
    return this.http.get<User[]>(this.apiUrl);

  }
}
