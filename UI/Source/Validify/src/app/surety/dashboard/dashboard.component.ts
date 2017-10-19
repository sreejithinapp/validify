
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

import { MessageService } from 'primeng/components/common/messageservice';

import { SuretyService } from "../surety.service";
import { SharedService } from "../../shared/shared.service";
//import { StorageService } from "../../shared/storage.service";
//import { DummyAPIService } from "../../shared/dummy-api.service";


@Component({
    selector: 'vfy-surety-dashboard', 
    templateUrl: './dashboard.component.html', 
    styleUrls: ['./dashboard.component.css'],
    providers: [MessageService]
})

export class DashboardComponent implements OnInit, OnDestroy {       
    
    private subscriptionMessage:Subscription; 
    private subscriptionDashboard:Subscription; 

    constructor(private router:Router, private messageService: MessageService, private suretyService:SuretyService, private sharedService:SharedService) {
        this.messageCheck();
        this.dashboardCheck();      
    }

    ngOnInit() : void {     
        //ngOnInit       
    }

    ngOnDestroy() {        
        if (this.subscriptionMessage) this.subscriptionMessage.unsubscribe(); 
        if (this.subscriptionDashboard) this.subscriptionDashboard.unsubscribe();    
    }
    //................................................................... 


    
    //...................................................................
    messageCheck(){        
        this.subscriptionMessage = this.suretyService.behaviorSubjectMessageInit().subscribe((response) => {   
            console.log('SURETY messageCheck SUCCESS>> message Obj,', response);  
            this.showGrowlMessage(response);
        }, (error) => {  
            console.log('SURETY messageCheck ERROR>> Error: ', error);   
        });
    } 

    private showGrowlMessage(obj:any){        
      if (obj){  
        //console.log('SURETY showGrowlMessage Obj,', obj); 
        this.messageService.add({severity: obj.severity, summary:obj.summary, detail:obj.detail});
      }  
    } 
    //...................................................................



    //...................................................................
    dashboardCheck(){        
        this.subscriptionDashboard = this.suretyService.behaviorSubjectDashboardInit().subscribe((response) => {   
            console.log('SURETY dashboardCheck SUCCESS>> dashboard Obj,', response);   
        }, (error) => {  
            console.log('SURETY dashboardCheck ERROR>> Error: ', error);   
        });
    }    
    //...................................................................


   
}





//...................................................................  
/*
private subscriptionDashboard:Subscription;   

public postBtnAction() {   
    this.subscriptionDashboard = this.dashboardService.postAction().subscribe((response) => {
        //this.postSuccess(response); //Depolyment
        this.dummyPostResponse(); //DUMMY Test
    
    }, (error) => {            
        //this.postFail(error); //Depolyment               
        this.dummyPostResponse(); //DUMMY Test
    });       
}

private dummyPostResponse(){
    let response = this.dummyAPIService.getPostResponse();
    //console.log('dummyPostResponse: ', response);
    this.postSuccess(response);
}

private postSuccess(response:any){
    //console.log('postSuccess>> response: ', response);       
    if (response.data) {           
        this.postResultObj = {};  
        this.postResultObj = response.data;   
        //this.setSuccessInfoMessageAndBehaviourSubject({statusText: "Success!"});       
    }  
}  

private postFail(error:any){
    //console.log('postFail error: ', error); 
    //this.setFailInfoMessageAndBehaviourSubject(error);       
}
*/
//...................................................................  