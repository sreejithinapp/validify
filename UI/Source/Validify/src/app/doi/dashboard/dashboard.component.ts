
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

import { MessageService } from 'primeng/components/common/messageservice';

import { DoiService } from "../doi.service";
import { SharedService } from "../../shared/shared.service";
//import { StorageService } from "../../shared/storage.service";
//import { DummyAPIService } from "../../shared/dummy-api.service";


@Component({
    selector: 'vfy-doi-dashboard', 
    templateUrl: './dashboard.component.html', 
    styleUrls: ['./dashboard.component.css'],
    providers: []
})

export class DashboardComponent implements OnInit, OnDestroy {       
    
    private subscriptionMessage:Subscription; 
    private subscriptionDashboard:Subscription; 
    public dashboardObj;

    constructor(private router:Router, private messageService: MessageService, private doiService:DoiService, private sharedService:SharedService) {
        this.dashboardCheck();      
    }

    ngOnInit() : void {     
        //ngOnInit       
    }

    ngOnDestroy() {        
        if (this.subscriptionDashboard){
            this.subscriptionDashboard.unsubscribe();  
        }  
    }        
    //................................................................... 


    
    //...................................................................
    dashboardCheck(){        
        this.subscriptionDashboard = this.doiService.behaviorSubjectDashboardInit().subscribe((response) => {   
            console.log('DOI dashboardCheck SUCCESS>> dashboard Obj,', response);  
            this.dashboardObj = response;
        }, (error) => {  
            console.log('DOI dashboardCheck ERROR>> Error: ', error);   
        });
    }    
    //...................................................................


   
}


