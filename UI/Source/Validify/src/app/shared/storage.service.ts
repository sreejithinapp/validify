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

