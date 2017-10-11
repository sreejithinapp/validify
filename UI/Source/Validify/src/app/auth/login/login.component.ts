
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { Login } from "./login";
import { AuthService } from "../auth.service";
import { StorageService } from "../../shared/storage.service";
import { SharedService } from "../../shared/shared.service";


@Component({
    selector: 'vfy-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [Login]
})

export class LoginComponent implements OnInit, OnDestroy {

    //obsvGetUser: Subscription;
    obsvLogin: Subscription;     
    //...................................................................


    //...................................................................
    constructor(private router:Router, private authService:AuthService, private loginModel:Login, private storage:StorageService, private sharedService:SharedService) {
        //constructor         
    }
    //...................................................................


    //...................................................................
    login() {          
        //this.loginAction(); //Deployment
        this.loginDummy('group1'); //DUMMY  //group2 - doi | group1 - surety        
    }
    //...................................................................


    //...................................................................
    private loginAction(){
        this.obsvLogin = this.authService.login(this.loginModel).subscribe((response) => {
            this.loginSuccess(response);
        }, (error) => {
            this.loginFail(error);
        });
    }
    private loginDummy(id){
        this.authService.setIsLoggedInInCheckUsingBS(true);         
        this.authService.setIsWhichRoleCheckUsingBS(id);       
        this.storage.set("auth_token", "abcd");
        this.storage.set("user_role", id);
        if (id === 'group1'){
            this.router.navigate(["/suretydashboard"]);    
        } else if (id === 'group2'){
            this.router.navigate(["/doidashboard"]);    
        }
        //this.router.navigate(["/dashboard"]);          
        //this.loginFail({message:"Login Failed message"});  //DUMMY LOGIN FAIL        
    }
    //...................................................................


    //...................................................................
    private loginSuccess(response:any){
        console.log('loginSuccess>> response: ', response);       
        if (response.data) {

            if (response.data["auth_token"]) {
                this.storage.set("auth_token", response.data.access_token);
            }
            if (response.data["user_role"]) {
                this.storage.set("user_role", response.data.user_role);
            }
            
            let msgObj = {severity: 'success', summary: 'Dashboard', detail:'Logined Successfully!'};            
            this.sharedService.setCurrentMsg(msgObj);  

            this.authService.setIsLoggedInInCheckUsingBS(true);         
            this.authService.setIsWhichRoleCheckUsingBS(response.data.user_role);  

            let id = response.data["user_role"];
            if (id === 'group1'){
                this.router.navigate(["/suretydashboard"]);    
            } else if (id === 'group2'){
                this.router.navigate(["/doidashboard"]);    
            }
            //this.router.navigate(["/dashboard"]); 
        }
    } 
    
    private loginFail(error: any){
        console.log('loginFail error: ', error);   

        let msgObj = {severity: 'error', summary: 'Error', detail: error.statusText};            
        this.sharedService.setCurrentMsg(msgObj); 

        this.authService.setIsLoggedInInCheckUsingBS(false);  
        this.authService.setIsWhichRoleCheckUsingBS("NONE");             
    }
    //...................................................................     
        

   

    //...................................................................
    private hasAuthToken() {
        setTimeout(() => {  
            if (!this.authService.isLoggedIn()) {  
                this.authService.setIsLoggedInInCheckUsingBS(false);
            }
        }, 0);
    }
    private hasRole() {
        setTimeout(() => {  
            if (!this.authService.getWhichRole()) {  
                this.authService.setIsWhichRoleCheckUsingBS("NONE");
            }
        }, 0);
    }
    //...................................................................


    //...................................................................
    ngOnInit() {
        this.hasAuthToken();
        this.hasRole();
    }
    ngOnDestroy() {
        if (this.obsvLogin) this.obsvLogin.unsubscribe();
        //if (this.obsvGetUser) this.obsvGetUser.unsubscribe();
    }
    //...................................................................


    //...................................................................
    private searchBtnAction():void{       
        //alert("searchBtnAction");  
        this.sharedService.setIsDialogOverlayCheckUsingBS(true);      
    }
    //...................................................................

    
    
    //...................................................................
    private testBtnAction():void{       
        alert("testBtnAction");  
        //this.sharedService.setIsDialogOverlayCheckUsingBS(true);       
    }
    //...................................................................
   

}



/*
//...................................................................
//this.storage.remove("auth_token"); this.storage.remove("user_role"); 

//................
fetchUserDetails(){
    this.obsvGetUser = this.authService.getUserDetails().subscribe((response) => {
        console.log('fetchUserDetails>> response: ', response);
        if (response.user) {
            this.storage.set('user_details', JSON.stringify(response.user));      
            let role_id = this.storage.get('user_details').role_id;
            if (role_id === 1) {//DUMMY
                response.permission = {};
            }
            this.storage.setPermissions(response.permission);
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