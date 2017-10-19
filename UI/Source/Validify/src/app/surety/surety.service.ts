
import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SharedService } from "../shared/shared.service";
import { StorageService } from "../shared/storage.service";
//import { HttpService } from "../../shared/http-service/http.service";
//import { Constants } from "./surety.constants";



@Injectable()
export class SuretyService {        

    private behaviorSubjectMessage;
    private behaviorSubjectDashboard;    
    
    constructor(private sharedService:SharedService, private storageService:StorageService) {
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
        return this.storageService.get('dashboard');         
        //return this.sharedService.getDashboardObj();           
    }
    //...............................................
   

}



