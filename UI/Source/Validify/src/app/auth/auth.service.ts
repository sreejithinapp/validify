
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Login } from "./login/login";
import { HttpService } from "../shared/http-service/http.service";
import { StorageService } from "../shared/storage.service";
import { Constants } from "../shared/constants";


@Injectable()
export class AuthService {  
  
  private behaviorSubjectLogin;
  private behaviorSubjectRole;  
  
  private behaviorSubjectLogout;
  private isLogoutResponseFound:boolean = false;

  constructor(private storageService:StorageService, private httpService:HttpService) {
    //constructor
  }
  //............................................



  //...............................................
  //LOGIN  
  behaviorSubjectLoginInit() {  
    this.behaviorSubjectLogin = new BehaviorSubject(this.getLogin());
    return this.behaviorSubjectLogin.asObservable();
  }      
  setBehaviorSubjectLogin(bool:boolean) {
    this.behaviorSubjectLogin.next(bool);
  }    
  getLogin() { 
    return this.storageService.get('auth_token') ? true : false;
  } 
  getToken() { 
    return this.storageService.get('auth_token') ? this.storageService.get('auth_token') : null;
  }  
  //...............................................



  //...............................................
  //ROLE
  behaviorSubjectRoleInit() {  
    this.behaviorSubjectRole = new BehaviorSubject(this.getRole());
    return this.behaviorSubjectRole.asObservable();
  }       
  setBehaviorSubjectRole(roleID:string) {
    this.behaviorSubjectRole.next(roleID);
  }  
  getRole() {   
    return this.storageService.get('user_role');  
  } 
  //...............................................


  //...............................................
  //LOGOUT 
  behaviorSubjectLogoutInit() {  
    this.behaviorSubjectLogout = new BehaviorSubject(this.getLogout());
    return this.behaviorSubjectLogout.asObservable();
  }       
  setBehaviorSubjectLogout(bool:boolean) {
    this.isLogoutResponseFound = bool;
    this.behaviorSubjectLogout.next(bool);
  }  
  getLogout() {   
    return this.isLogoutResponseFound;
  }
  clearStorageItems(){
    this.storageService.remove("auth_token");
    this.storageService.remove("user_role");
    this.storageService.remove("dashboard");
    this.storageService.remove("userinfo");       
  }
  //...............................................




  //API Service..................................... 
  login(loginModel:Login) {      
    return this.httpService.httpPost(Constants.login, {email: loginModel.username, password: loginModel.password, remember: loginModel.remember});
  }
  
  bondSearch(searchTxt:string) {      
    return this.httpService.httpPost(Constants.bondsearch, {search: searchTxt});
  }

  forgot(username:string, email:string) {      
    return this.httpService.httpPost(Constants.forgot, {username: username, email: email});
  }
 
  logout() {
    return this.httpService.httpPost(Constants.logout, {});
  } 
  //..................................................


}

