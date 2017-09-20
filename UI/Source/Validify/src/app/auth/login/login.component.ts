
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription } from "rxjs/Subscription";

import { Message } from "primeng/components/common/message";

import { LoggerService } from 'app/utils/logger.service';
import { AuthService } from "app/auth/auth.service";
import { StorageService } from "app/utils/storage.service";
import { Login } from "app/auth/login/login";


@Component({
    selector: 'vfy-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoggerService, Login]
})

export class LoginComponent implements OnInit, OnDestroy {

    obsvGetUser: Subscription;
    obsvLogin: Subscription;
    displayMsgs: Message[] = [];

    constructor(private router: Router, private authService: AuthService, public loginModel: Login, private storage: StorageService) {
        //constructor
    }

    login() {        
        this.loginDummyAction();//DUMMY TEST
        //this.loginAction();//Deployment
    }

    loginAction(){
        this.obsvLogin = this.authService.login(this.loginModel).subscribe((response) => {
            if (response.status == "200" && response.content) {

                if (response.content["access_token"]) {

                    this.storage.set("access_token", response.content.access_token);

                    this.obsvGetUser = this.authService.getUserDetails().subscribe((response) => {
                        if (response.user) {
                            this.storage.set('user_details', JSON.stringify(response.user));      
                            let role_id = this.storage.get('user_details').role_id;
                            if (role_id === 1) {//DUMMY
                                response.permission = {};
                            }
                            this.storage.setPermissions(response.permission);
                            this.router.navigate(["/dashboard"]);       
                            this.authService.setIsLoggedInSubject(true);
                        }                        
                    });
                }
            }

        }, (err) => {
            console.log('LOGIN ERROR: ', {severity: 'error', summary: 'Error', detail: err.message});
            this.displayMsgs = [];
            this.displayMsgs.push({severity: 'error', summary: 'Error', detail: err.message});
        });
    }

    loginDummyAction(){ 
        this.storage.set("access_token", null);
        this.router.navigate(["/dashboard"]);       
        this.authService.setIsLoggedInSubject(true);        
    }

    hasAuthToken() {
        setTimeout(() => {  
            if (!this.authService.isLoggedIn()) {  
                this.authService.setIsLoggedInSubject(false);
            }
        }, 0);
    }

    ngOnInit() {
        this.hasAuthToken();
    }

    ngOnDestroy() {
        if (this.obsvLogin) this.obsvLogin.unsubscribe();
        if (this.obsvGetUser) this.obsvGetUser.unsubscribe();
    }
}
