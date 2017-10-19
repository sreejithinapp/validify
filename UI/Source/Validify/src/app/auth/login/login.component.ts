
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

    private subscriptionLogin:Subscription; 
    
    constructor(private router:Router, public loginModel:Login, private authService:AuthService, private storageService:StorageService, private sharedService:SharedService, private dummyAPIService:DummyAPIService) {
        //constructor         
    }

    ngOnInit() {
        this.loginCheck();
        this.roleCheck();        
    }

    ngOnDestroy() {
        if (this.subscriptionLogin) this.subscriptionLogin.unsubscribe();        
    }
    //...................................................................


    //...................................................................
    private loginCheck() {
        setTimeout(() => {  
            if (!this.authService.getLogin()) {  
                this.authService.setBehaviorSubjectLogin(false);
            }
        }, 0);                
    }

    private roleCheck() {
        setTimeout(() => {  
            if (!this.authService.getRole()) {  
                this.authService.setBehaviorSubjectRole("NONE");
            }
        }, 0);
    }      
    //...................................................................
   


    //...................................................................
    public login() {        
        
        this.subscriptionLogin = this.authService.login(this.loginModel).subscribe((response) => {
            //this.loginSuccess(response); //Depolyment
            this.dummyLoginResponse(this.loginModel); //DUMMY Test
        
        }, (error) => {            
            //this.loginFail(error); //Depolyment
            this.dummyLoginResponse(this.loginModel); //DUMMY Test
        });
    }
   
    private dummyLoginResponse(obj){
        let response:any;
        if (obj.username === "surety@validify.com"){
            response = this.dummyAPIService.getLoginResponseSurety(); 
        } else if (obj.username === "doi@validify.com"){
            response = this.dummyAPIService.getLoginResponseDOI(); 
        } else{
            this.setFailInfoMessageAndBehaviourSubject({}); 
            return;
        } 
        //console.log('dummyLoginResponse: ', response);
        this.loginSuccess(response);
    }

    private loginSuccess(response:any){
        console.log('loginSuccess>> response: ', response);  

        if (response.data) {

            if (response.data.auth_token) {
                this.storageService.set("auth_token", response.data.auth_token);
            }

            if (response.data.user_role) {
                
                this.storageService.set("user_role", response.data.user_role);
                this.setSuccessInfoMessageAndBehaviourSubject(true, response.data.user_role); 
                
                if (response.data.dashboard) {
                
                    this.sharedService.setDashboardObj(response.data.dashboard);  

                    let id = response.data.user_role;
                    
                    if (id === 'group1'){                
                        this.router.navigate(["/surety"]);    
                    
                    } else if (id === 'group2'){
                        this.router.navigate(["/doi"]);    
                    }  
                }

            }//dashboard data end 

        }//response.data end
    } 
    
    private loginFail(error: any){
        console.log('loginFail error: ', error);   
        this.setFailInfoMessageAndBehaviourSubject(error);                         
    }
    //...................................................................  



    //................................................................... 
    private setSuccessInfoMessageAndBehaviourSubject(login:boolean, role:string){
        //console.log('setSuccessInfoMessageAndBehaviourSubject obj: ', obj);   
        
        let msgObj = {severity: 'success', summary: 'Login', detail:'Logined Successfully!'};            
        this.sharedService.setCurrentMsg(msgObj);  

        this.authService.setBehaviorSubjectLogin(login);  

        this.authService.setBehaviorSubjectRole(role);  
    }

    private setFailInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setMessageAndBehaviourSubject obj: ', obj); 

        let detailTxt = 'Login Failed'; //obj.statusText          
        let msgObj = {severity: 'error', summary: 'Login', detail: detailTxt};            
        this.sharedService.setCurrentMsg(msgObj);  

        this.authService.setBehaviorSubjectLogin(false);  

        this.authService.setBehaviorSubjectRole("NONE");  
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