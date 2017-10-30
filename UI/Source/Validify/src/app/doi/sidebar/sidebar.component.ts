import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { DoiService } from "../doi.service";
import { SharedService } from "../../shared/shared.service";
import { StorageService } from "../../shared/storage.service";
//import { DummyAPIService } from "../../shared/dummy-api.service";


@Component({
 selector: 'vfy-doi-sidebar',
 templateUrl: './sidebar.component.html',
 styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnDestroy {    

    private subscriptionUserInfo:Subscription; 
    public userInfoObj;

    private menuToggleSubscription:Subscription;
    public isHeadLabelHide:boolean = false;    

    constructor(private router:Router, private storageService:StorageService, private sharedService:SharedService, private doiService:DoiService){      
       this.userInfoCheck();
       this.menuCollapseCheck();   
    }

    ngOnInit() {
        //ngOnInit           
    } 

    ngOnDestroy() {  
        if (this.subscriptionUserInfo){
            this.subscriptionUserInfo.unsubscribe();  
        }   
        if (this.menuToggleSubscription){
            this.menuToggleSubscription.unsubscribe();  
        }   
    }
    //....................................... 

    //.......................................     
    private userInfoCheck(){        
        this.subscriptionUserInfo = this.doiService.behaviorSubjectUserInfoInit().subscribe((response) => {   
            //console.log('userInfoCheck userInfoObj SUCCESS>> ', response);  
            this.userInfoObj = response;            
        }, (error) => {  
            console.log('userInfoCheck >> userInfoObj ERROR>> ', error);   
        });
    } 
    //.......................................   
    

    //...................................................................  
    private menuCollapseCheck() {
        this.menuToggleSubscription = this.sharedService.isMenuCollapsed.subscribe((boo) => {  
            if (boo){
                this.isHeadLabelHide = true;           
            } else {                
                this.isHeadLabelHide = false;             
            }                        
        });
    }
    //................................................................... 
   
  

}
