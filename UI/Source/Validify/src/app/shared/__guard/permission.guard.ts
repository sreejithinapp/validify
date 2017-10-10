/*
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StorageService } from "app/utils/storage.service";
import { AuthService } from "app/auth/auth.service";


@Injectable()
export class PermissionGuard implements CanActivate {

  public path: string;
  public module: string;
  public permissions: any;

  constructor(private storage: StorageService, private authService: AuthService, private router: Router) {
    //constructor
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let permissions =  this.getPermissions();
    this.module = next.parent.url[0].path;
    this.path = next.url[0].path;
    let role_id = this.storage.get('user_details').role_id;
    if (!permissions) {      
      return this.authService.getPermissions(role_id).map((res) => {      
        if (role_id === 1) {//dummy
          res = { "customer": { "add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true }, "employee": { "add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true }, "equipment": { "add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true }, "inventory": { "add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true }, "invoice": { "add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true }, "master": { "add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true }, "quote": { "add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true }, "report": { "add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true }, "role": { "add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true }, "service_agreement": { "add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true }, "workorder": { "add": true, "all": true, "delete": true, "edit": true, "export": true, "print": true, "view": true } }
        }
        this.storage.setPermissions(res);
        return this.getPermissionBoolean(this.module, this.path);
      });
    } else {
      return this.getPermissionBoolean(this.module, this.path);
    }
  }

  getPermissionBoolean(parent, child) {
    let permissions =  this.getPermissions();
    let theModule = this.getModuleNameForUrlPath(parent);
    let permissionKey = this.getPermissonKeyforModule(theModule, child);
    let bool = theModule && permissionKey && permissions[theModule] && permissions[theModule][permissionKey];
    if (bool) {
      return bool;
    } else {
      this.router.navigate(["dashboard"]);
      return bool;
    }
  }

  getPermissions() {
    return this.storage.getPermissions();
  }

  getModuleNameForUrlPath(key) {
    let urlPaths = {
    'customer': 'customer',    
    'employee': 'employee',
    'roles' : 'role'
    }
    return urlPaths[key] || false;
  }

  getPermissonKeyforModule(moduleName, permission) {
    let permissionKey = {
      'customer': {
        'add' : 'add','edit' : 'view','list': 'view',
        'detail' : 'view','draft' : 'view'
      },  
      'role' : {
        'list' : 'view'
      }
    }
    return permissionKey[moduleName][permission] || false;
  }

}

*/