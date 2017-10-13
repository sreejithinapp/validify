import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    constructor() { }   

    //...................................................................
    public set(name:string, value:any) {
        value = (typeof value == "string") ? value : JSON.stringify(value);
        window.localStorage.setItem(name, value);
    }

    public get(name:string) {
        try {
            return JSON.parse(window.localStorage.getItem(name));
        } catch (error) {
            return window.localStorage.getItem(name);
        }    
    }
    
    public remove(name:string){
        window.localStorage.removeItem(name);
    }
    //...................................................................   

}


/*
//...................................................................
setLocal(name:string, value: any) {
    value = (typeof value == "string") ? value : JSON.stringify(value);
    window.localStorage.setItem(name, value);
}
getLocal(name: string) {
    let val;
    try {
        val = JSON.parse(window.localStorage.getItem(name));
    } catch (error) {
        val = window.localStorage.getItem(name);
    }
    return val;
}
removeLocal(name:string){
    window.localStorage.removeItem(name);
}
//...................................................................


//...................................................................
setPermissions(permissions) {
    permissions = (typeof permissions == "string") ? permissions : JSON.stringify(permissions);
    window.localStorage.setItem('permissions', permissions);
}
getPermissions(moduleName?) {
    let val;
    try {
        val = JSON.parse(window.localStorage.getItem('permissions'));
    } catch (error) {
        val = window.localStorage.getItem('permissions');
    }
    return moduleName ? val[moduleName] : val;
}
//...................................................................
*/