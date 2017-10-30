
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
//import {Subscription} from "rxjs/Subscription";

import { SharedService } from "../shared/shared.service";
//import { MessageService } from 'primeng/components/common/messageservice';
//import { SuretyService } from "./surety.service";
//import { StorageService } from "../shared/storage.service";
//import { DummyAPIService } from "../shared/dummy-api.service";


@Component({
    selector: 'vfy-surety', 
    templateUrl: './surety.component.html', 
    styleUrls: ['./surety.component.css'],
    providers: []
})

export class SuretyComponent implements OnInit, OnDestroy {       
   
   public menuToggleClassObj:any;
 
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
    private menuCollapseCheck(){
      this.sharedService.behaviorSubjectMenuToggleInit().subscribe((boo) => {  
        if (boo){
            this.menuToggleClassObj = { "toggled": false };             
        } else {
            this.menuToggleClassObj = { "toggled": true };            
        }                        
      });
    }
    //................................................................... 

   
}


