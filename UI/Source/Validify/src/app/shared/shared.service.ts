
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SharedService {  

    private dashboardObj:any;
    private currentMessageObj:any;

    private subjectMenuToggle = new Subject<boolean>();   
    public isMenuCollapsed = this.subjectMenuToggle.asObservable();

    constructor() {        
        this.updateMenuCollapsedStatus(false);      
    }
    //.................................................
    

    
    //...............................................
    //Menu Toggle      
    public updateMenuCollapsedStatus(boo:boolean) {
        this.subjectMenuToggle.next(boo);
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

