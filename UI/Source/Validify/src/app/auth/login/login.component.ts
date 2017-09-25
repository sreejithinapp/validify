
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { Login } from "app/auth/login/login";

import { AuthService } from "app/auth/auth.service";
import { StorageService } from "app/utils/storage.service";
import { SharedService } from "app/core/shared.service";


@Component({
    selector: 'vfy-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [Login]
})

export class LoginComponent implements OnInit, OnDestroy {

    obsvGetUser: Subscription;
    obsvLogin: Subscription;  
    //...................................................................


    //...................................................................
    constructor(private router:Router, private authService:AuthService, private loginModel:Login, private storage:StorageService, private sharedService:SharedService) {
        //constructor         
    }
    //...................................................................


    //...................................................................
    login() {  
        //console.log('this.loginModel:', this.loginModel);      
        //this.loginAction(); //Deployment
        this.loginDummy();//DUMMY       
    }
    loginAction(){
        this.obsvLogin = this.authService.login(this.loginModel).subscribe((response) => {
            this.loginSuccess(response);
        }, (err) => {
            this.loginFail(err);
        });
    }
    loginDummy(){
        this.gotoDashboard(null); //DUMMY LOGIN SUCCESS
        //this.loginFail({message:"Login Failed message"});  //DUMMY LOGIN FAIL        
    }
    //...................................................................



    //...................................................................
    loginSuccess(response){
        console.log('loginAction>> response: ', response);
        if (response.status == "200" && response.result) {
            if (response.result["access_token"]) {
                this.storage.set("access_token", response.result.access_token);
            }
            if (response.result["role_id"]) {
                this.storage.set("role_id", response.result.role_id);
            }
            this.gotoDashboard(response); 
        }
    } 
    gotoDashboard(response){
        //this.storage.remove("access_token"); this.storage.remove("role_id");//DUMMY    

        this.authService.setIsLoggedInInCheckUsingBS(true);         
        this.authService.setIsWhichRoleCheckUsingBS("R1");   

        //this.storage.set("access_token", response.result.access_token);
        //this.storage.set("role_id", response.result.role_id);
        this.storage.set("access_token", "abcd");//DUMMY
        this.storage.set("role_id", "R1");//DUMMY

        this.router.navigate(["/dashboard"]);  
    }
    //...................................................................


    //...................................................................
    loginFail(err){
        let errorObj = {severity: 'error', summary: 'Error', detail: err.message};            
        this.sharedService.setCurrentMsg(errorObj);
        //console.log('LOGIN ERROR: ', errorObj);
        this.authService.setIsLoggedInInCheckUsingBS(false);  
        this.authService.setIsWhichRoleCheckUsingBS("NONE");       
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
    ngOnInit() {
        this.hasAuthToken();
        this.hasRole();
    }
    ngOnDestroy() {
        if (this.obsvLogin) this.obsvLogin.unsubscribe();
        if (this.obsvGetUser) this.obsvGetUser.unsubscribe();
    }
    //...................................................................



    //...................................................................
    testBtnAction(){
        alert("testBtnAction")
    }
    //...................................................................


    //...................................................................
    /*
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
    */
    //...................................................................

}
