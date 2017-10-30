
import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {  

    private dashboardObj:any;
    private currentMessageObj:any;
   
    private behaviorSubjectMenuToggle;
    private behaviorSubjectMenuToggle2;
    private isCollapsed:boolean = false;
        
    constructor() {
        //constructor      
    }
    //.................................................
    

    
    //...............................................  
    //Menu Toggle  
    behaviorSubjectMenuToggleInit() {  
        this.behaviorSubjectMenuToggle = new BehaviorSubject(this.getCollapsedStatus());
        return this.behaviorSubjectMenuToggle.asObservable();
    }       
    setBehaviorSubjectMenuCollapsed(boo:boolean) {
        this.isCollapsed = boo;
        this.behaviorSubjectMenuToggle.next(boo);
    }  
    getCollapsedStatus() {   
        return this.isCollapsed; 
    }   
    //...............................................
   


    //.................................................
    //Dashboard
    public setDashboardObj(obj:any) { 
        this.dashboardObj = obj;           
    }
    public getDashboardObj() { 
         return this.dashboardObj;    
    }
    //.................................................


    //.................................................
    //Message
    public setCurrentMsg(messageObj:any) { 
        this.currentMessageObj = { 
            severity: messageObj.severity,
            summary: messageObj.summary,
            detail: messageObj.detail         
        } 
        this.currentMessageObj;    
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

