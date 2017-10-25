
import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { MessageService } from 'primeng/components/common/messageservice';

import { AuthService } from "../../auth/auth.service";
import { SharedService } from "../shared.service";
import { StorageService } from "../storage.service";
import { HeaderService } from "./header.service";
import { DummyAPIService } from "../dummy-api.service";


@Component({
 selector: 'vfy-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css'],
 providers: []
})

export class HeaderComponent implements OnInit, OnDestroy {  

    private subscriptionHeader:Subscription; 
    private subscriptionLogout:Subscription;       
    public headerObj;

    constructor(private router:Router, private messageService:MessageService, private authService:AuthService, private storageService:StorageService, private sharedService:SharedService, private headerService:HeaderService, private dummyAPIService:DummyAPIService){      
       this.headerCheck(); 
    }

    ngOnInit() {
        //ngOnInit      
    } 

    ngOnDestroy() {         
        if (this.subscriptionHeader) {
            this.subscriptionHeader.unsubscribe(); 
        }
        if (this.subscriptionLogout) {
            this.subscriptionLogout.unsubscribe(); 
        }
        this.clearMessageService();
        this.headerObj = null;
    }
    //...................................................................



    //...................................................................
    private headerCheck(){        
        this.subscriptionHeader = this.headerService.behaviorSubjectHeaderInit().subscribe((response) => {   
            console.log('Header headerObj SUCCESS>> ', response);  
            this.headerObj = response;            
        }, (error) => {  
            console.log('Header headerObj ERROR>> ', error);   
        });
    }   

    private showGrowlMessage(){     
      var obj = this.sharedService.getCurrentMsg();
      if (obj){      
        this.messageService.add({severity: obj.severity, summary:obj.summary, detail:obj.detail});
      }  
    } 

    private clearMessageService(){
        this.messageService.clear();
    }  
    //...................................................................




    //................................................................... 
    public logoutBtnAction() {      
        this.subscriptionLogout = this.authService.logout().subscribe((response) => {
            //this.logoutSuccess(response); //Depolyment
            this.dummyLogoutResponse(); //DUMMY Test
        }, (error) => {            
            //this.logoutFail(error); //Depolyment               
            this.dummyLogoutResponse(); //DUMMY Test
        });        
    }

    private dummyLogoutResponse(){
        let response = this.dummyAPIService.getLogoutResponse(true);
        //console.log('dummyBondSearchResponse: ', response);
        if (response.status_code === 200){
            this.logoutSuccess(response);
        } else {
            this.logoutFail(response);
        }           
    }

    private logoutSuccess(response:any){
        //console.log('logoutSuccess>> response: ', response);       
        if (response.data) {   
            this.goToLogin(); 
            this.setSuccessInfoMessage(response);       
        }  
    }  

    private logoutFail(error:any){
        //console.log('logoutFail error: ', error);         
        this.goToLogin();  
        this.setFailInfoMessage(error);     
    }

    private goToLogin(){
        this.authService.clearStorageItems();        
        location.replace('/'); 
    }

    private setSuccessInfoMessage(obj:any){
        //console.log('setSuccessInfoMessage obj: ', obj);          
        let msgObj = {severity: 'success', summary: 'Header Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj); 
        this.showGrowlMessage();        
    }

    private setFailInfoMessage(obj:any){
        //console.log('setFailInfoMessage obj: ', obj);           
        let msgObj = {severity: 'error', summary: 'Header Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.showGrowlMessage(); 
    }
    //................................................................... 


}



