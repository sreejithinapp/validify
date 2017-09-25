
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpService } from "app/utils/http-service/http.service";
import { StorageService } from "app/utils/storage.service";
import { Login } from "app/auth/login/login";
import { Constants } from "app/core/constants";


@Injectable()
export class AuthService {  
  
  private bsForLoginCheck;
  private bsForRoleCheck;

  constructor(private storage:StorageService, private httpService:HttpService) {
    //constructor
  }

  //LOGIN CHECK
  isLoggedIn() {   
    return this.storage.get('access_token') ? true : false;
  } 
  isLoggedInCheckUsingBS() {  
    this.bsForLoginCheck = new BehaviorSubject(this.isLoggedIn());
    return this.bsForLoginCheck.asObservable();
  }     
  setIsLoggedInInCheckUsingBS(bool:boolean) {
    this.bsForLoginCheck.next(bool);
  }  

  //ROLE CHECK
  getWhichRole() {   
    return this.storage.get('role_id');  
  } 
  isWhichRoleCheckUsingBS() {  
    this.bsForRoleCheck = new BehaviorSubject(this.getWhichRole());
    return this.bsForRoleCheck.asObservable();
  }     
  setIsWhichRoleCheckUsingBS(roleID:string) {
    this.bsForRoleCheck.next(roleID);
  }  


  //LOGIN ACTION - POST API
  login(loginModel:Login) {    
    return this.httpService.httpPost(Constants.login, {username: loginModel.username, password: loginModel.password, remember: loginModel.remember});
  }
  
  //LOGOUT ACTION - POST API
  logout() {
    return this.httpService.httpPost(Constants.logout, {});
  }
  
  //GET USER
  getUserDetails() {
    return this.httpService.httpGet(Constants.userdetails);
  } 

  //GET PERMISSIONS 
  getPermissions(role_id) {
     return this.httpService.httpGet('role/role_permission/' + role_id);
  }
 
}
