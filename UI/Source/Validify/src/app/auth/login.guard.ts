
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from "./auth.service";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
        //constructor
    }
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['dashboard']);
            console.log("Alreday Logined..goto Dashboard");
            return false;
        } else {
            console.log("Not Logined")
            return true;
        }
    }

}

