
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

import { AuthService } from "../auth/auth.service";
import { SharedService } from "../shared/shared.service";
import { StorageService } from "../shared/storage.service";

import { DummyAPIService } from "../shared/dummy-api.service";


@Component({
    selector: 'vfy-surety-dashboard', 
    templateUrl: './surety-dashboard.component.html', 
    styleUrls: ['./surety-dashboard.component.css']
})

export class SuretyDashboardComponent implements OnInit, OnDestroy {   

    private subscriptionLogout:Subscription;    

    constructor(private router:Router, private authService:AuthService, private sharedService:SharedService, private storageService:StorageService, private dummyAPIService:DummyAPIService) {
        //constructor         
    }

    ngOnInit() : void {     
        //ngOnInit
    }

    ngOnDestroy() {        
        if (this.subscriptionLogout) this.subscriptionLogout.unsubscribe(); 
    }
    //................................................................... 


    //................................................................... 
    logoutBtnAction() {      
        this.subscriptionLogout = this.authService.logout().subscribe((response) => {
            //this.logoutSuccess(response); //Depolyment
            this.dummyLogoutResponse(); //DUMMY Test

        }, (error) => {            
            //this.logoutFail(error); //Depolyment               
            this.dummyLogoutResponse(); //DUMMY Test
        });        
    }

    dummyLogoutResponse(){
        let response = this.dummyAPIService.getLogoutResponse();
        //console.log('dummyBondSearchResponse: ', response);
        this.logoutSuccess(response);        
    }

    logoutSuccess(response:any){
        //console.log('logoutSuccess>> response: ', response);       
        if (response.data) {   
            this.goToLogin(); 
            //this.setSuccessInfoMessageAndBehaviourSubject({statusText: response.data.status});       
        }  
    }  

    logoutFail(error:any){
        //console.log('logoutFail error: ', error);         
        this.goToLogin();  
        //this.setFailInfoMessageAndBehaviourSubject(error);     
    }

    goToLogin(){
        this.storageService.remove("auth_token");
        this.storageService.remove("user_role");
        //this.storageService.set("loggedIn", "false");  
        location.replace('/');  //location.reload(true);      
    }
    //................................................................... 



    //...................................................................
    /*     
    setSuccessInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setSuccessInfoMessageAndBehaviourSubject obj: ', obj);           
        let msgObj = {severity: 'success', summary: 'Logout', detail: obj.statusText};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.authService.setBehaviorSubjectLogout(true);  
    }

    setFailInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setFailInfoMessageAndBehaviourSubject obj: ', obj);          
        let msgObj = {severity: 'error', summary: 'Logout', detail: obj.statusText};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.authService.setBehaviorSubjectLogout(true);  
    }
    */  
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