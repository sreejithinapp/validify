
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Login } from "./login/login";

import { HttpService } from "../shared/http-service/http.service";
import { StorageService } from "../shared/storage.service";
import { Constants } from "../shared/constants";


@Injectable()
export class AuthService {  
  
  private bsForLoginCheck;
  private bsForRoleCheck;
  private behaviorSubjectBondSearch;
  private isBondSearchResultNotFound:boolean = false;

  constructor(private storage:StorageService, private httpService:HttpService) {
    //constructor
  }
  //............................................


  //...............................................
  //LOGIN CHECK
  isLoggedIn() {     
    //this.storage.remove("auth_token"); this.storage.remove("user_role"); //dummy
    return this.storage.get('auth_token') ? true : false;
  } 
  isLoggedInCheckUsingBS() {  
    this.bsForLoginCheck = new BehaviorSubject(this.isLoggedIn());
    return this.bsForLoginCheck.asObservable();
  }     
  setIsLoggedInInCheckUsingBS(bool:boolean) {
    this.bsForLoginCheck.next(bool);
  }  
  //...............................................



  //...............................................
  //ROLE CHECK
  getWhichRole() {   
    return this.storage.get('user_role');  
  } 
  isWhichRoleCheckUsingBS() {  
    this.bsForRoleCheck = new BehaviorSubject(this.getWhichRole());
    return this.bsForRoleCheck.asObservable();
  }     
  setIsWhichRoleCheckUsingBS(roleID:string) {
    this.bsForRoleCheck.next(roleID);
  }  
  //...............................................


  //...............................................
  //BOND SERACH RESULT CHECK   
  behaviorSubjectBondSearchResult() {  
    this.behaviorSubjectBondSearch = new BehaviorSubject(this.getBehaviorSubjectBondSearchResult());
    return this.behaviorSubjectBondSearch.asObservable();
  } 
  getBehaviorSubjectBondSearchResult() {   
    return this.isBondSearchResultNotFound;
  }    
  setBehaviorSubjectBondSearchNotFound(bool:boolean) {
    this.isBondSearchResultNotFound = bool;
    this.behaviorSubjectBondSearch.next(bool);
  }  
  //...............................................




  //API Service...............................................
  //LOGIN ACTION - POST API
  login(loginModel:Login) {      
    return this.httpService.httpPost(Constants.login, {email: loginModel.username, password: loginModel.password, remember: loginModel.remember});
  }
  
  bondSearch(searchTxt:string) {      
    return this.httpService.httpPost(Constants.bondsearch, {search: searchTxt});
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

