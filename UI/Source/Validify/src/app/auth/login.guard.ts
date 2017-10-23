
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
        if (this.authService.getLogin()) {  
            this.authService.behaviorSubjectRoleInit().subscribe((roleID) => {                 
                if (roleID === 'group1'){
                    this.router.navigate(['/surety']);
                } else if (roleID === 'group2'){
                    this.router.navigate(['/doi']);       
                } else {
                    this.authService.clearStorageItems();
                    this.router.navigate(['/login']);
                    console.log("Logined but Role Not found");                  
                    return true;
                } 
                console.log("Alreday Logined..goto Dashboard");                 
                return false;    
            });            
            
        } else {
            this.authService.clearStorageItems();
            console.log("Not Logined");          
            return true;
        }
    }

}

