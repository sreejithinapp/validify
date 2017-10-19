
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
//import {Subscription} from "rxjs/Subscription";

//import { MessageService } from 'primeng/components/common/messageservice';
//import { SuretyService } from "./surety.service";
//import { SharedService } from "../shared/shared.service";
//import { StorageService } from "../shared/storage.service";
//import { DummyAPIService } from "../shared/dummy-api.service";


@Component({
    selector: 'vfy-surety', 
    templateUrl: './surety.component.html', 
    styleUrls: ['./surety.component.css'],
    providers: []
})

export class SuretyComponent implements OnInit, OnDestroy {       
   
    constructor(private router:Router) {
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


