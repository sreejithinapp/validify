
import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SharedService } from "../shared/shared.service";
//import { HttpService } from "../../shared/http-service/http.service";
//import { StorageService } from "../../shared/storage.service";
//import { Constants } from "./surety.constants";



@Injectable()
export class SuretyService {        

    private behaviorSubjectMessage;
    private behaviorSubjectDashboard;    
    
    constructor(private sharedService:SharedService) {
        //constructor
    }
    //.................................................


    //...............................................  
    //MESSAGE 
    behaviorSubjectMessageInit() {  
        this.behaviorSubjectMessage = new BehaviorSubject(this.getMessageObj());
        return this.behaviorSubjectMessage.asObservable();
    }       
    setBehaviorSubjectMessage(obj:any) {
        this.behaviorSubjectMessage.next(obj);
    }     
    getMessageObj() {       
        return this.sharedService.getCurrentMsg();           
    }
    //...............................................


    //...............................................  
    //DASHBOARD 
    behaviorSubjectDashboardInit() {  
        this.behaviorSubjectDashboard = new BehaviorSubject(this.getDashboardObj());
        return this.behaviorSubjectDashboard.asObservable();
    }       
    setBehaviorSubjectDashboard(obj:any) {
        this.behaviorSubjectDashboard.next(obj);
    }     
    getDashboardObj() { 
        //return this.storage.get('dashboard');         
        return this.sharedService.getDashboardObj();           
    }
    //...............................................
   

}



