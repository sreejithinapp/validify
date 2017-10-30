
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { SharedService } from "../shared/shared.service";
//import { MessageService } from 'primeng/components/common/messageservice';
//import { SuretyService } from "./surety.service";
//import { StorageService } from "../shared/storage.service";
//import { DummyAPIService } from "../shared/dummy-api.service";


@Component({
    selector: 'vfy-doi', 
    templateUrl: './doi.component.html', 
    styleUrls: ['./doi.component.css']
})

export class DoiComponent implements OnInit, OnDestroy {   
   
    public menuToggleClassObj:any;
    private menuToggleSubscription:Subscription;

    constructor(private router:Router, private sharedService:SharedService) {     
        this.menuCollapseCheck();   
    }

    ngOnInit() : void {     
        //ngOnInit
    }

    ngOnDestroy() {        
        //ngOnDestroy
    }
    //................................................................... 


    //...................................................................
    private menuCollapseCheck() {
        this.menuToggleSubscription = this.sharedService.isMenuCollapsed.subscribe((boo) => {  
            if (boo){ 
                this.menuToggleClassObj = { "toggled": false };             
            } else {
                this.menuToggleClassObj = { "toggled": true };            
            }                        
        });
    }
    //................................................................... 

   
}


