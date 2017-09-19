
/*
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {LoggerService} from 'app/utils/logger.service';
import {AuthService} from "app/auth/auth.service";
import {Login} from "app/auth/login/login";
import {StorageService} from "app/utils/storage.service";
import {Message} from "primeng/components/common/message";
import {Subscription} from "rxjs/Subscription";

@Component({
 selector: 'evn-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.scss'],
 providers: [LoggerService, Login]
})

export class LoginComponent implements OnInit, OnDestroy {
 obsvGetUser: Subscription;
 obsvLogin: Subscription;
 displayMsgs: Message[] = [];

 constructor(private router: Router,
             private authService: AuthService,
             public loginModel: Login,
             private storage: StorageService) {
 }

 login() {
  this.obsvLogin = this.authService.login(this.loginModel).subscribe((response) => {
   if (response.status == "200" && response.content) {
    if (response.content["access_token"]) {
     this.storage.set("access_token", response.content.access_token);
     this.obsvGetUser = this.authService.getUserDetails().subscribe((response) => {
      if (response.user) {
       this.storage.set('user_details', JSON.stringify(response.user));

       //Coded for the time being. wana change this in api
       let role_id = this.storage.get('user_details').role_id;
       if (role_id === 1) {
        response.permission = {
         "customer": {
          "add": true,
          "all": true,
          "delete": true,
          "edit": true,
          "export": true,
          "print": true,
          "view": true
         },
         "employee": {
          "add": true,
          "all": true,
          "delete": true,
          "edit": true,
          "export": true,
          "print": true,
          "view": true
         },
         "equipment": {
          "add": true,
          "all": true,
          "delete": true,
          "edit": true,
          "export": true,
          "print": true,
          "view": true
         },
         "inventory": {
          "add": true,
          "all": true,
          "delete": true,
          "edit": true,
          "export": true,
          "print": true,
          "view": true
         },
         "invoice": {
          "add": true,
          "all": true,
          "delete": true,
          "edit": true,
          "export": true,
          "print": true,
          "view": true
         },
         "master": {
          "add": true,
          "all": true,
          "delete": true,
          "edit": true,
          "export": true,
          "print": true,
          "view": true
         },
         "quote": {"add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true},
         "report": {
          "add": true,
          "all": true,
          "delete": true,
          "edit": true,
          "export": true,
          "print": true,
          "view": true
         },
         "role": {"add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true},
         "service_agreement": {
          "add": true,
          "all": true,
          "delete": true,
          "edit": true,
          "export": true,
          "print": true,
          "view": true
         },
         "workorder": {
          "add": true,
          "all": true,
          "delete": true,
          "edit": true,
          "export": true,
          "print": true,
          "view": true
         }
        }
       }
       this.storage.setPermissions(response.permission);
       this.router.navigate(["/dashboard"]);
       //Show SideNavBar & Header View
       this.authService.setIsLoggedInSubject(true);
      }
     });
    }
   }
  }, (err) => {
   this.displayMsgs = [];
   this.displayMsgs.push({severity: 'error', summary: 'Error', detail: err.message});
  });
 }

 hasAuthToken() {
  setTimeout(() => {
   //On Logged Out
   if (!this.authService.isLoggedIn()) {
    //Hide SideNavBar & Header View
    this.authService.setIsLoggedInSubject(false);
   }
  }, 0);
 }

 ngOnInit() {
  this.hasAuthToken();
 }

 ngOnDestroy() {
  this.obsvLogin.unsubscribe();
  this.obsvGetUser.unsubscribe();
 }
}
*/