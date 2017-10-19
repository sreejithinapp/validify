
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { MessageService } from 'primeng/components/common/messageservice';

import { Login } from "./login";
import { AuthService } from "../auth.service";
import { StorageService } from "../../shared/storage.service";
import { SharedService } from "../../shared/shared.service";
import { DummyAPIService } from "../../shared/dummy-api.service";

@Component({
    selector: 'vfy-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [Login, MessageService]
})

export class LoginComponent implements OnInit, OnDestroy {    

    private subscriptionLogin:Subscription; 
    
    constructor(private router:Router, private messageService: MessageService, public loginModel:Login, private authService:AuthService, private storageService:StorageService, private sharedService:SharedService, private dummyAPIService:DummyAPIService) {
       this.loginCheck();                
    }

    ngOnInit() {  
        //ngOnInit         
    }

    ngOnDestroy() {
        if (this.subscriptionLogin) this.subscriptionLogin.unsubscribe();        
    }
    //...................................................................



    //...................................................................
    loginCheck(){
      this.authService.behaviorSubjectLoginInit().subscribe((boo) => {  
        if (boo){
            this.roleCheck();  
        } else {
            this.showGrowlMessage(); 
        }                        
      });
    }

    roleCheck(){
      this.authService.behaviorSubjectRoleInit().subscribe((role) => {   
        if (role === 'group1'){       
          this.router.navigate(['/surety']);
        } else if (role === 'group2'){
          this.router.navigate(['/doi']);           
        } else {
            this.router.navigate(['/login']); 
        }
        this.showGrowlMessage();              
      });
    }    
   
    showGrowlMessage(){     
      var obj = this.sharedService.getCurrentMsg();
      if (obj){      
        this.messageService.add({severity: obj.severity, summary:obj.summary, detail:obj.detail});
      }        
      //this.messageService.clear();//clear message
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
                    
                    this.storageService.set("dashboard", response.data.dashboard);
                    //this.sharedService.setDashboardObj(response.data.dashboard);  

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
    private setSuccessInfoMessageAndBehaviourSubject(isLogined:boolean, role:string){
        //console.log('setSuccessInfoMessageAndBehaviourSubject obj: ', obj);   
        
        let msgObj = {severity: 'success', summary: 'Login', detail:'Logined Successfully!'};            
        this.sharedService.setCurrentMsg(msgObj);  

        this.authService.setBehaviorSubjectLogin(isLogined);  
        this.authService.setBehaviorSubjectRole(role);  
    }

    private setFailInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setMessageAndBehaviourSubject obj: ', obj); 

        let detailTxt = 'Login Failed'; //obj.statusText          
        let msgObj = {severity: 'error', summary: 'Login', detail: detailTxt};            
        this.sharedService.setCurrentMsg(msgObj);  

        this.authService.setBehaviorSubjectLogin(false);        
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