
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

import { AuthService } from "../auth/auth.service";
import { SharedService } from "../shared/shared.service";
import { StorageService } from "../shared/storage.service";
import { DummyAPIService } from "../shared/dummy-api.service";


@Component({
    selector: 'vfy-doi', 
    templateUrl: './doi.component.html', 
    styleUrls: ['./doi.component.css']
})

export class DoiComponent implements OnInit, OnDestroy {   
   
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








/*
//import { LoggerService } from "app/utils/logger.service"; 
//import * as _ from  "lodash";
//logger.$log(this,"Test");
//logger.$log(this,_.VERSION);
data: any;  bardata: any;  chartOptions:any;
this.chartOptions = {responsive:false,maintainAspectRatio: false}
this.data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{label: 'Work Order',data: [28, 48, 40, 19, 86, 27, 90],fill: false, borderColor: '#565656'}]
}
this.bardata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{label: 'First Week',backgroundColor: '#42A5F5',borderColor: '#1E88E5',data: [65, 59, 80, 81, 56, 55, 40]},
        {label: 'Second Week',backgroundColor: '#9CCC65',borderColor: '#7CB342',data: [28, 48, 40, 19, 86, 27, 90]}
    ]
}
<p-chart type="bar" [data]="bardata" [height]="200" [options]="chartOptions"></p-chart>
*/