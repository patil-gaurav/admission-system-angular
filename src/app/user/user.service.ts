import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  // public getUsersData(enabled,page,size) {
	// 	let headers= new Headers();
  //   headers.append('Authorization','Bearer '+this.$localStorage.retrieve('authenticationToken'));
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.get(environment.SERVER_API_URL + 'platform/api/user-infos?enabled.equals='+enabled+'&page='+page+'&size='+size, options);
  //   }

  public getCollegesList() {
    return this.http.get('http://localhost:8000/api/colleges');
  }

  public createUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/users/signup', user, options);
  }

  public login(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8000/api/users/signin', user, options)
                    .map();

    function authenticatieSuccess
  }
}

// this.http.get("http://jsonplaceholder.typicode.com/users").
//       map((response) ⇒ response.json()).
//       subscribe((data) ⇒ console.log(data))
