
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { MessageService } from 'primeng/components/common/messageservice';

import { AuthService } from "../auth.service";
import { SharedService } from "../../shared/shared.service";
import { DummyAPIService } from "../../shared/dummy-api.service";

@Component({
    selector: 'vfy-bond-search',
    templateUrl: './bond-search.component.html',
    styleUrls: ['./bond-search.component.css'],
    providers: []   
})

export class BondSearchComponent implements OnInit, OnDestroy {    
    
    private subscriptionBondSearch:Subscription;    
    public bondSearchResultElemStatus:boolean = false;
    public bondSearchTxt:string;
    public searchResultObj:object;

    constructor(private messageService:MessageService, private authService:AuthService, private sharedService:SharedService, private dummyAPIService:DummyAPIService) {
        this.bondSearchCheck();      
    }

    ngOnInit() {      
        //this.clearVars();
    } 

    ngOnDestroy() {               
        if (this.subscriptionBondSearch) {
            this.subscriptionBondSearch.unsubscribe();             
        }
        this.clearVars();
        this.clearMessageService();  
    }    
    //...................................................................



    //...................................................................
    private clearVars(){
        this.bondSearchResultElemStatus = false;
        this.bondSearchTxt = "";
        this.searchResultObj = null;
    }

    private bondSearchCheck(){
        this.clearVars();
        this.authService.behaviorSubjectBondSearchInit().subscribe((bool) => { 
            if (bool){
                this.showGrowlMessage();     
            }   
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
    public bondSearchCloseBtnAction(){
        this.clearVars();
        this.clearMessageService();
    }

    public bondSearchBtnAction() { 
        this.clearMessageService();

        if (this.bondSearchTxt.length > 3) {

            this.subscriptionBondSearch = this.authService.bondSearch(this.bondSearchTxt).subscribe((response) => {
                //this.bondSearchSuccess(response); //Depolyment
                this.dummyBondSearchResponse(); //DUMMY Test
            
            }, (error) => {            
                //this.bondSearchFail(error); //Depolyment               
                this.dummyBondSearchResponse(); //DUMMY Test
            });

        } else { 
            this.setFailInfoMessageAndBehaviourSubject({status_text: "Bond search text should contains atleast four characters!"});             
        }
    }
   
    private dummyBondSearchResponse(){
        let response = this.dummyAPIService.getBondSearchResponse(true); //true -> Success and false -> Fail     
        if (response.status_code === 200){
            this.bondSearchSuccess(response);
        } else {
            this.bondSearchFail(response); 
        }        
    }

    private bondSearchSuccess(response:any){
        //console.log('bondSearchSuccess>> response: ', response);       
        if (response.data) {           
            this.searchResultObj = {};  
            this.searchResultObj = response.data;   
            this.setSuccessInfoMessageAndBehaviourSubject(response);       
        }        
        this.bondSearchResultElemStatus = true;        
    }  

    private bondSearchFail(error:any){
        //console.log('bondSearchFail error: ', error); 
        this.setFailInfoMessageAndBehaviourSubject(error);       
    }
    //...................................................................  



    //................................................................... 
    private setSuccessInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setSuccessInfoMessageAndBehaviourSubject obj: ', obj);          
        let msgObj = {severity: 'success', summary: 'Public Bond Search', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.authService.setBehaviorSubjectBondSearch(true);  
    }

    private setFailInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setFailInfoMessageAndBehaviourSubject obj: ', obj);           
        let msgObj = {severity: 'error', summary: 'Public Bond Search', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.authService.setBehaviorSubjectBondSearch(true);  
    }
    //................................................................... 
 

}


