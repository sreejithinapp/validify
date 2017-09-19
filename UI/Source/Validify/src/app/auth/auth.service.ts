import {Injectable} from '@angular/core';

/*
import {HttpService} from "app/utils/http-service/http.service";
import {Login} from "app/auth/login/login";
import {Constants} from "app/core/constants";
import {StorageService} from "app/utils/storage.service";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
*/

@Injectable()
export class AuthService {
  
  /*private behaviorSubject$ = new BehaviorSubject(this.isLoggedIn());

  constructor(private storage: StorageService,
              public httpService: HttpService) {
  }

  isLoggedInSubject() {
    return this.behaviorSubject$.asObservable();
  }

  setIsLoggedInSubject(bool: boolean) {
    this.behaviorSubject$.next(bool);
  }

  isLoggedIn() {
    return this.storage.get('access_token') ? true : false;
  }

  login(loginModel: Login) {
    return this.httpService.httpPost(Constants.login, {email: loginModel.username, password: loginModel.password});
  }

  getUserDetails() {
    return this.httpService.httpGet(Constants.userdetails);
  }

  logout() {
    return this.httpService.httpPost(Constants.logout, {});
  }


  getPermissions(role_id) {
     return this.httpService.httpGet('role/role_permission/'+role_id);
  }
  */
}
