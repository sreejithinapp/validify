import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { AuthService } from "../../auth/auth.service";
import { SharedService } from "../../shared/shared.service";
import { StorageService } from "../../shared/storage.service";
import { DummyAPIService } from "../../shared/dummy-api.service";


@Component({
 selector: 'vfy-doi-sidebar',
 templateUrl: './sidebar.component.html',
 styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnDestroy {    

    constructor(private router:Router, private authService:AuthService, private sharedService:SharedService, private storageService:StorageService, private dummyAPIService:DummyAPIService){      
    
    }

    ngOnInit() {
        //ngOnInit      
    } 

    ngOnDestroy() {        
        //ngOnDestroy        
    }
    //.......................................


   

}
