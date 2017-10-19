
import {Injectable} from '@angular/core';


@Injectable()
export class SharedService {  

    private dashboardObj:any = null; 
    private currentMessageObj:any = null;   
        
    constructor() {
        //constructor
    }
    //.................................................
 


    //.................................................
    public setDashboardObj(obj) { 
        this.dashboardObj = obj;           
    }

    public getDashboardObj() { 
         return this.dashboardObj;    
    }
    //.................................................



    //.................................................
    public setCurrentMsg(messageObj) { 
        this.currentMessageObj = { 
            severity: messageObj.severity,
            summary: messageObj.summary,
            detail: messageObj.detail         
        } 
        return this.currentMessageObj;    
    }

    public getCurrentMsg() { 
         return this.currentMessageObj;    
    }
    //.................................................


    //.................................................
    public getConfirmDetails() { 
        const obj = { 
            message: "Are you sure that you want to proceed?",
            header: "Confirmation",
            icon: "fa fa-question-circle",
            accept_severity: "info",
            accept_summary: "Confirmed",
            accept_detail:"You have accepted",
            reject_severity:"info",
            reject_summary:"Rejected",
            reject_detail:"You have rejected" 
        } 
        return obj;    
    }
    //.................................................


   

}



//.................................................
/*
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

private bsForDialogOverlay;
isDialogOverlayCheckUsingBS() {  
    this.bsForDialogOverlay = new BehaviorSubject(false);
    return this.bsForDialogOverlay.asObservable();
}     
setIsDialogOverlayCheckUsingBS(boo:boolean) {
    this.bsForDialogOverlay.next(boo);
} 
*/ 
//.................................................

