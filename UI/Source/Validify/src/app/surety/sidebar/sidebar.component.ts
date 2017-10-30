import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { SuretyService } from "../surety.service";
import { SharedService } from "../../shared/shared.service";

@Component({
 selector: 'vfy-surety-sidebar',
 templateUrl: './sidebar.component.html',
 styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnDestroy {    

    private subscriptionUserInfo:Subscription; 
    public userInfoObj;

    private menuToggleSubscription:Subscription;
    public isHeadLabelHide:boolean = false;    

    constructor(private router:Router, private sharedService:SharedService, private suretyService:SuretyService){      
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
    //................................................................... 


    //...................................................................    
    private userInfoCheck(){        
        this.subscriptionUserInfo = this.suretyService.behaviorSubjectUserInfoInit().subscribe((response) => {   
            //console.log('userInfoCheck userInfoObj SUCCESS>> ', response);  
            this.userInfoObj = response;                           
        }, (error) => {  
            console.log('userInfoCheck >> userInfoObj ERROR>> ', error);   
        });
    } 
    //................................................................... 


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
