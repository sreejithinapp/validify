
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

import { DashboardService } from "./dashboard.service";
import { SharedService } from "../../shared/shared.service";
import { StorageService } from "../../shared/storage.service";
import { DummyAPIService } from "../../shared/dummy-api.service";


@Component({
    selector: 'vfy-surety-dashboard', 
    templateUrl: './dashboard.component.html', 
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {       
    

    constructor(private router:Router, private dashboardService:DashboardService, private sharedService:SharedService, private storageService:StorageService, private dummyAPIService:DummyAPIService) {
        //constructor         
    }

    ngOnInit() : void {     
        //ngOnInit
    }

    ngOnDestroy() {        
        //ngOnDestroy
        //if (this.subscriptionDashboard) this.subscriptionDashboard.unsubscribe();
    }
    //................................................................... 



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

   
}







