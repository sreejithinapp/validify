
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from "./auth.service";

@Injectable()
export class LoginGuard implements CanActivate {

    public isDoi:boolean = false;
    public isSurety:boolean = false;

    constructor(private authService: AuthService, private router: Router) {
        //constructor       
    }
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isLoggedIn()) {    
            this.authService.behaviorSubjectRoleInit().subscribe((roleID) => {  
                this.isSurety = false;  this.isDoi = false;      
                //group2 - doi | group1 - surety      
                if (roleID === "group1" || roleID === "group2"){       
                    if (roleID === 'group1'){
                        this.isSurety = true;
                    } else if (roleID === 'group2'){
                        this.isDoi = true;         
                    }       
                }  
                if (this.isSurety){
                    this.router.navigate(['suretydashboard']);
                } else if (this.isDoi){
                    this.router.navigate(['doidashboard']);
                }

                console.log("Alreday Logined..goto Dashboard");
                return false;
            });            
            
        } else {
            console.log("Not Logined")
            return true;
        }
    }

}

