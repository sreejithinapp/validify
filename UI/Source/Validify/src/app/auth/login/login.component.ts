
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import {MessageService} from 'primeng/components/common/messageservice';

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
    
    constructor(private router:Router, private messageService:MessageService, public loginModel:Login, private authService:AuthService, private storageService:StorageService, private sharedService:SharedService, private dummyAPIService:DummyAPIService) {
       this.loginCheck();                
    }

    ngOnInit() {  
        //ngOnInit         
    }

    ngOnDestroy() {       
        if (this.subscriptionLogin) {
            this.subscriptionLogin.unsubscribe();               
        }   
        this.clearMessageService();  
    }
    //...................................................................



    //...................................................................
    private loginCheck(){
      this.authService.behaviorSubjectLoginInit().subscribe((boo) => {  
        if (boo){
            this.roleCheck();  
        } else {
            this.showGrowlMessage(); 
        }                        
      });
    }

    private roleCheck(){
      this.authService.behaviorSubjectRoleInit().subscribe((role) => {   
        if (role === 'group1'){       
          this.router.navigate(['/surety']);
        } else if (role === 'group2'){
          this.router.navigate(['/doi']);           
        } else {
            this.authService.clearStorageItems();
            this.router.navigate(['/login']); 
        }
        this.showGrowlMessage();              
      });
    }    
   
    private showGrowlMessage(){     
      var obj = this.sharedService.getCurrentMsg();
      if (obj){      
        this.messageService.add({severity: obj.severity, summary:obj.summary, detail:obj.detail});
      }        
    } 

    private clearMessageService(){
        this.messageService.clear();
    }
    //...................................................................

     


    //...................................................................
    public login() {        
        
        this.clearMessageService();

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
        if (obj.username === "surety@validify.com") {
            response = this.dummyAPIService.getLoginResponseSurety(true); //true -> Success and false -> Fail 
        } else if (obj.username === "doi@validify.com") {
            response = this.dummyAPIService.getLoginResponseDOI(true); //true -> Success and false -> Fail 
        } else {
            response = this.dummyAPIService.getLoginResponseDOI(false); //true -> Success and false -> Fail 
        }  

        if (response.status_code === 200){
            this.loginSuccess(response);
        } else {
            this.loginFail(response); 
        }         
    }

    private loginSuccess(response:any){
        //console.log('loginSuccess>> response: ', response);  

        if (response.data) {

            if (response.data.auth_token) {
                this.storageService.set("auth_token", response.data.auth_token);
            }

            if (response.data.user_role) {
                
                this.storageService.set("user_role", response.data.user_role);
                this.setSuccessMessage(response, true, response.data.user_role); 
                
                if (response.data.dashboard) {

                    let userInfoObj = {
                        "username": response.data.username,
                        "email": response.data.email,
                        "first_name": response.data.first_name,
                        "last_name": response.data.last_name
                    };                                    
                    this.storageService.set("userinfo", userInfoObj);

                    this.storageService.set("dashboard", response.data.dashboard);
                   
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
    
    private loginFail(error:any){
        //console.log('loginFail error: ', error);   
        this.setFailMessage(error);                         
    }
    //...................................................................  



    //................................................................... 
    private setSuccessMessage(obj:any, isLogined:boolean, role:string){              
        let msgObj = {severity: 'success', summary: 'Login', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.authService.setBehaviorSubjectLogin(isLogined);  
        this.authService.setBehaviorSubjectRole(role);  
    }

    private setFailMessage(obj:any){             
        let msgObj = {severity: 'error', summary: 'Login', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.authService.setBehaviorSubjectLogin(false);        
    }
    //...................................................................    
    
}

