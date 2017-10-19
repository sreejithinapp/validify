import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
//import { Subscription } from "rxjs/Subscription";

//import { SharedService } from "../../shared/shared.service";
//import { StorageService } from "../../shared/storage.service";
//import { DummyAPIService } from "../../shared/dummy-api.service";


@Component({
 selector: 'vfy-doi-sidebar',
 templateUrl: './sidebar.component.html',
 styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnDestroy {    

    constructor(private router:Router){      
        //constructor
    }

    ngOnInit() {
        //ngOnInit      
    } 

    ngOnDestroy() {        
        //ngOnDestroy        
    }
    //.......................................


   

}
