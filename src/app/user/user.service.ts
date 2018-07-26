import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from './user.model'

@Injectable()
export class UserService {

  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  signup(user: User): Observable<User> {
    this.http.post(baseUrl + 'users/signup', user)
             .map((res: Response) => res.json())
             .subscribe((data) => {
               console.log(data)
             });
  }
}
