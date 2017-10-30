
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

    private subscriptionSearch:Subscription; 
    private subscriptionLogout:Subscription;  
  
    public searchTxt:string = "";  
    public display:boolean = false;

    private isCollapsed:boolean = false; 
    public menuToggleClassObj:any;   

    constructor(private router:Router, private messageService:MessageService, private authService:AuthService, private storageService:StorageService, private sharedService:SharedService, private headerService:HeaderService, private dummyAPIService:DummyAPIService){      
        this.toggleMenu();   
    }

    ngOnInit() {
        //ngOnInit      
    } 

    ngOnDestroy() {   
        if (this.subscriptionLogout) {
            this.subscriptionLogout.unsubscribe(); 
        }
        if (this.subscriptionSearch) {
            this.subscriptionSearch.unsubscribe();            
        }        
        this.clearVars();
    }
    //...................................................................



    //................................................................... 
    public toggleMenu(){      
        if (this.isCollapsed){
            this.menuToggleClassObj = { "toggled": false }; 
            this.isCollapsed = false; 
            this.sharedService.setBehaviorSubjectMenuCollapsed(true);
        } else {
            this.menuToggleClassObj = { "toggled": true }; 
            this.isCollapsed = true; 
            this.sharedService.setBehaviorSubjectMenuCollapsed(false);
        }
    }   
    //................................................................... 



    //...................................................................
    private clearVars(){
        this.display = false;        
        this.searchTxt = "";        
        this.clearMessageService();
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
            this.setSuccessLogoutMessage(response);       
        }  
    }  

    private logoutFail(error:any){          
        this.goToLogin();  
        this.setFailLogoutMessage(error);     
    }

    private goToLogin(){
        this.authService.clearStorageItems();        
        location.replace('/'); 
    }

    private setSuccessLogoutMessage(obj:any){       
        let msgObj = {severity: 'success', summary: 'Logout', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj); 
        this.showGrowlMessage();        
    }

    private setFailLogoutMessage(obj:any){
        //console.log('setFailLogoutMessage obj: ', obj);           
        let msgObj = {severity: 'error', summary: 'Logout', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.showGrowlMessage(); 
    }
    //................................................................... 



    //................................................................... 
    private showSearchResult(){        
        this.display = true;        
    }
  
    public closeBtnAction(){      
        this.searchTxt = "";      
        this.display = false;       
    }

    public searchBtnAction() {  
        this.clearMessageService();        
        if (this.searchTxt.length > 2) {            
            this.subscriptionSearch = this.headerService.search(this.searchTxt).subscribe((response) => {
                //this.searchSuccess(response); //Depolyment
                this.dummySearchResponse(); //DUMMY Test            
            }, (error) => {            
                //this.searchFail(error); //Depolyment              
                this.dummySearchResponse(); //DUMMY Test
            });
        } else { 
            this.setFailSearchMessage({status_text:"Please enter atleast 3 characters for search!"});
        }
    }
   
    private dummySearchResponse(){
        let response = this.dummyAPIService.getSearchResponse(true); //true -> Success and false -> Fail      
        if (response.status_code === 200){
            this.searchSuccess(response);
        } else {
            this.searchFail(response); 
        }         
    }

    private searchSuccess(response:any){
        //console.log('httpSuccess>> response: ', response);       
        if (response.data) {   
            this.setSuccessSearchMessage(response);            
            this.showSearchResult(); 
        }                   
    }  

    private searchFail(error:any){      
        this.setFailSearchMessage(error);             
    }
  
    private setSuccessSearchMessage(obj:any){            
        let msgObj = {severity: 'success', summary: 'Search Result', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);         
    }

    private setFailSearchMessage(obj:any){
        //console.log('setFailSearchMessage obj: ', obj);           
        let msgObj = {severity: 'error', summary: 'Search Result', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.showGrowlMessage(); 
    }
    //................................................................... 


}



