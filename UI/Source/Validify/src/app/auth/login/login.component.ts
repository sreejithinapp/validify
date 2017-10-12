
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { Login } from "./login";
import { AuthService } from "../auth.service";
import { StorageService } from "../../shared/storage.service";
import { SharedService } from "../../shared/shared.service";
import { DummyAPIService } from "../../shared/dummy-api.service";

@Component({
    selector: 'vfy-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [Login]
})

export class LoginComponent implements OnInit, OnDestroy {    

    private obsvLogin:Subscription; 
    private isForgot:boolean = false   
  
    constructor(private router:Router, private loginModel:Login, private authService:AuthService, private storageService:StorageService, private sharedService:SharedService, private dummyAPIService:DummyAPIService) {
        //constructor         
    }

    ngOnInit() {
        this.hasAuthToken();
        this.hasRole();
    }

    ngOnDestroy() {
        if (this.obsvLogin) this.obsvLogin.unsubscribe();        
    }
    //...................................................................


    //...................................................................
    hasAuthToken() {
        setTimeout(() => {  
            if (!this.authService.isLoggedIn()) {  
                this.authService.setIsLoggedInInCheckUsingBS(false);
            }
        }, 0);
    }

    hasRole() {
        setTimeout(() => {  
            if (!this.authService.getWhichRole()) {  
                this.authService.setIsWhichRoleCheckUsingBS("NONE");
            }
        }, 0);
    }    
    //...................................................................
   

    //...................................................................
    login() {          
        this.obsvLogin = this.authService.login(this.loginModel).subscribe((response) => {
            //this.loginSuccess(response); //Depolyment
            this.dummyLoginResponse(); //DUMMY Test
        }, (error) => {            
            this.loginFail(error); //Depolyment
           // this.dummyLoginResponse(); //DUMMY Test
        });
    }
   
    dummyLoginResponse(){
        let response = this.dummyAPIService.getLoginResponseSurety(); //getLoginResponseDOI / getLoginResponseSurety
        console.log('dummyLoginResponse: ', response);
        this.loginSuccess(response);
    }

    loginSuccess(response:any){
        console.log('loginSuccess>> response: ', response);       
        if (response.data) {

            if (response.data.auth_token) {
                this.storageService.set("auth_token", response.data.auth_token);
            }
            if (response.data.user_role) {
                this.storageService.set("user_role", response.data.user_role);
            }
            
            let msgObj = {severity: 'success', summary: 'Dashboard', detail:'Logined Successfully!'};            
            this.sharedService.setCurrentMsg(msgObj);  

            this.authService.setIsLoggedInInCheckUsingBS(true);         
            this.authService.setIsWhichRoleCheckUsingBS(response.data.user_role);  

            let id = response.data.user_role;
            if (id === 'group1'){
                this.router.navigate(["/suretydashboard"]);    
            } else if (id === 'group2'){
                this.router.navigate(["/doidashboard"]);    
            }            
        }
    } 
    
    loginFail(error: any){
        console.log('loginFail error: ', error);   

        let msgObj = {severity: 'error', summary: 'Error', detail: error.statusText};            
        this.sharedService.setCurrentMsg(msgObj); 

        this.authService.setIsLoggedInInCheckUsingBS(false);  
        this.authService.setIsWhichRoleCheckUsingBS("NONE");                  
    }
    //...................................................................     


    //................................................................... 
    showForgot(){ 
        if (this.isForgot){
            this.isForgot = false;
        } else {
            this.isForgot = true;
        }
    }
    //................................................................... 

}



/*
//...................................................................
//this.storageService.remove("auth_token"); this.storageService.remove("user_role"); 

//................
fetchUserDetails(){
    this.obsvGetUser = this.authService.getUserDetails().subscribe((response) => {
        console.log('fetchUserDetails>> response: ', response);
        if (response.user) {
            this.storageService.set('user_details', JSON.stringify(response.user));      
            let role_id = this.storageService.get('user_details').role_id;
            if (role_id === 1) {//DUMMY
                response.permission = {};
            }
            this.storageService.setPermissions(response.permission);
            this.router.navigate(["/dashboard"]);       
            this.authService.setIsLoggedInInCheckUsingBS(true);
        }                        
    });
}
//................

//................
if (error.status === 401 || error.status === 0) {
    localStorage.clear();
    if (this.router.url != "/login") {
        location.reload();
    }
    return Observable.throw(error.json());
}
return Observable.throw(error.json()); 
//................

*/