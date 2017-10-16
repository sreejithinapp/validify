
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

import { AuthService } from "../../auth/auth.service";
import { SharedService } from "../../shared/shared.service";
import { StorageService } from "../../shared/storage.service";
import { DummyAPIService } from "../../shared/dummy-api.service";


@Component({
    selector: 'vfy-doi-dashboard', 
    templateUrl: './dashboard.component.html', 
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {   
   
    constructor(private router:Router, private authService:AuthService, private sharedService:SharedService, private storageService:StorageService, private dummyAPIService:DummyAPIService) {
        //constructor         
    }

    ngOnInit() : void {     
        //ngOnInit
    }

    ngOnDestroy() {        
        //ngOnDestroy
    }
    //................................................................... 


   
}





