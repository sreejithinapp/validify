
import { Injectable } from '@angular/core';

import { HttpService } from "app/utils/http-service/http.service";
import { StorageService } from "app/utils/storage.service";
import { Login } from "app/auth/login/login";
import { Constants } from "app/core/constants";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AuthService {
  
  private behaviorSubject$ = new BehaviorSubject(this.isLoggedIn());

  constructor(private storage: StorageService, public httpService: HttpService) {
    //constructor
  }

  isLoggedIn() {
    return this.storage.get('access_token') ? true : false;
  }

  isLoggedInSubject() {
    return this.behaviorSubject$.asObservable();
  }

  setIsLoggedInSubject(bool: boolean) {
    this.behaviorSubject$.next(bool);
  }  

  login(loginModel: Login) {
    return this.httpService.httpPost(Constants.login, {email: loginModel.username, password: loginModel.password});
  }
 
  logout() {
    return this.httpService.httpPost(Constants.logout, {});
  }

  /*
  getUserDetails() {
    return this.httpService.httpGet(Constants.userdetails);
  }
  getPermissions(role_id) {
     return this.httpService.httpGet('role/role_permission/' + role_id);
  }
  */

}
