
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

  private behaviorSubjectBondSearch;
  private isBondSearchResponseFound:boolean = false;

  private behaviorSubjectForgot;
  private isForgotResponseFound:boolean = false;

  constructor(private storage:StorageService, private httpService:HttpService) {
    //constructor
  }
  //............................................


  //...............................................
  //LOGIN  
  behaviorSubjectLoginInit() {  
    this.behaviorSubjectLogin = new BehaviorSubject(this.isLoggedIn());
    return this.behaviorSubjectLogin.asObservable();
  }  
  isLoggedIn() { 
    return this.storage.get('auth_token') ? true : false;
  }    
  setIsLoggedInInCheckUsingBS(bool:boolean) {
    this.behaviorSubjectLogin.next(bool);
  }  
  //...............................................



  //...............................................
  //ROLE
  behaviorSubjectRoleInit() {  
    this.behaviorSubjectRole = new BehaviorSubject(this.getWhichRole());
    return this.behaviorSubjectRole.asObservable();
  }  
  getWhichRole() {   
    return this.storage.get('user_role');  
  }    
  setIsWhichRoleCheckUsingBS(roleID:string) {
    this.behaviorSubjectRole.next(roleID);
  }  
  //...............................................


  //...............................................
  //BOND SERACH 
  behaviorSubjectBondSearchInit() {  
    this.behaviorSubjectBondSearch = new BehaviorSubject(this.getBehaviorSubjectBondSearchResult());
    return this.behaviorSubjectBondSearch.asObservable();
  } 
  getBehaviorSubjectBondSearchResult() {   
    return this.isBondSearchResponseFound;
  }    
  setBehaviorSubjectBondSearchNotFound(bool:boolean) {
    this.isBondSearchResponseFound = bool;
    this.behaviorSubjectBondSearch.next(bool);
  }  
  //...............................................


  //...............................................
  //FORGOT 
  behaviorSubjectForgotInit() {  
    this.behaviorSubjectForgot = new BehaviorSubject(this.getBehaviorSubjectForgot());
    return this.behaviorSubjectForgot.asObservable();
  } 
  getBehaviorSubjectForgot() {   
    return this.isForgotResponseFound;
  }    
  setBehaviorSubjectForgot(bool:boolean) {
    this.isForgotResponseFound = bool;
    this.behaviorSubjectForgot.next(bool);
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


//...................................................
/*
//GET USER
getUserDetails() {
  return this.httpService.httpGet(Constants.userdetails);
} 

//GET PERMISSIONS 
getPermissions(role_id) {
    return this.httpService.httpGet('role/role_permission/' + role_id);
}
*/
//...................................................