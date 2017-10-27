import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { SuretyService } from "../surety.service";
import { SharedService } from "../../shared/shared.service";
import { StorageService } from "../../shared/storage.service";
//import { DummyAPIService } from "../../shared/dummy-api.service";


@Component({
 selector: 'vfy-surety-sidebar',
 templateUrl: './sidebar.component.html',
 styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnDestroy {    

    private subscriptionUserInfo:Subscription; 
    public userInfoObj;

    constructor(private router:Router, private storageService:StorageService, private sharedService:SharedService, private suretyService:SuretyService){      
       this.userInfoCheck(); 
    }

    ngOnInit() {
        //ngOnInit           
    } 

    ngOnDestroy() {   
        if (this.subscriptionUserInfo){
            this.subscriptionUserInfo.unsubscribe();  
        }     
    }
    //.......................................  


    //.......................................     
    private userInfoCheck(){        
        this.subscriptionUserInfo = this.suretyService.behaviorSubjectUserInfoInit().subscribe((response) => {   
            //console.log('userInfoCheck userInfoObj SUCCESS>> ', response);  
            this.userInfoObj = response;            
        }, (error) => {  
            console.log('userInfoCheck >> userInfoObj ERROR>> ', error);   
        });
    } 
    //.......................................   

}
