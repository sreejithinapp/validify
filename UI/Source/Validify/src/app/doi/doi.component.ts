
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
//import {Subscription} from "rxjs/Subscription";

//import { SharedService } from "../shared/shared.service";
//import { StorageService } from "../shared/storage.service";
//import { DummyAPIService } from "../shared/dummy-api.service";


@Component({
    selector: 'vfy-doi', 
    templateUrl: './doi.component.html', 
    styleUrls: ['./doi.component.css']
})

export class DoiComponent implements OnInit, OnDestroy {   
   
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


