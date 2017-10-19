
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { MessageService } from 'primeng/components/common/messageservice';
//import { ConfirmationService } from 'primeng/primeng';

import { AuthService } from "../auth.service";
import { SharedService } from "../../shared/shared.service";
import { DummyAPIService } from "../../shared/dummy-api.service";

@Component({
    selector: 'vfy-bond-search',
    templateUrl: './bond-search.component.html',
    styleUrls: ['./bond-search.component.css'],
    providers: [MessageService]   
})

export class BondSearchComponent implements OnInit, OnDestroy {    
    
    private subscriptionBondSearch:Subscription;    
    public bondSearchResultElemStatus:boolean = false;
    public bondSearchTxt:string;
    public searchResultObj;

    constructor(private messageService: MessageService, private authService:AuthService, private sharedService:SharedService, private dummyAPIService:DummyAPIService) {
        this.bondSearchCheck();      
    }

    ngOnInit() {      
        this.bondSearchResultElemStatus = false;
        this.bondSearchTxt = "";
    } 

    ngOnDestroy() {        
        if (this.subscriptionBondSearch) this.subscriptionBondSearch.unsubscribe(); 
    }
    //...................................................................



    //...................................................................
    bondSearchCheck(){
      this.authService.behaviorSubjectBondSearchInit().subscribe((bool) => { 
        if (bool){
          this.showGrowlMessage();     
        }   
      });
    }
    
    showGrowlMessage(){     
      var obj = this.sharedService.getCurrentMsg();
      if (obj){      
        this.messageService.add({severity: obj.severity, summary:obj.summary, detail:obj.detail});
      }        
      //this.messageService.clear();//clear message
    }   
    //...................................................................



    //...................................................................
    public bondSearchCloseBtnAction(){
        this.bondSearchResultElemStatus = false;
        this.bondSearchTxt = "";
    }

    public bondSearchBtnAction() { 
        
        if (this.bondSearchTxt.length > 3) {

            this.subscriptionBondSearch = this.authService.bondSearch(this.bondSearchTxt).subscribe((response) => {
                //this.bondSearchSuccess(response); //Depolyment
                this.dummyBondSearchResponse(); //DUMMY Test
            
            }, (error) => {            
                //this.bondSearchFail(error); //Depolyment               
                this.dummyBondSearchResponse(); //DUMMY Test
            });

        } else { 
            this.setFailInfoMessageAndBehaviourSubject({statusText: "Bond Search Text Contains Atleast Four Characters!"});             
        }
    }
   
    private dummyBondSearchResponse(){
        let response = this.dummyAPIService.getBondSearchResponse();
        //console.log('dummyBondSearchResponse: ', response);
        this.bondSearchSuccess(response);
    }

    private bondSearchSuccess(response:any){
        //console.log('bondSearchSuccess>> response: ', response);       
        if (response.data) {           
            this.searchResultObj = {};  
            this.searchResultObj = response.data;   
            this.setSuccessInfoMessageAndBehaviourSubject({statusText: "Bond Search Success!"});       
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
        
        let msgObj = {severity: 'success', summary: 'Public Bond Search', detail: obj.statusText};            
        this.sharedService.setCurrentMsg(msgObj);  

        this.authService.setBehaviorSubjectBondSearch(true);  
    }

    private setFailInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setFailInfoMessageAndBehaviourSubject obj: ', obj);   
        
        let msgObj = {severity: 'error', summary: 'Public Bond Search', detail: obj.statusText};            
        this.sharedService.setCurrentMsg(msgObj);  

        this.authService.setBehaviorSubjectBondSearch(true);  
    }
    //................................................................... 
 

}



/*
//...................................................................
//this.storageService.remove("auth_token"); this.storageService.remove("user_role"); 

//................
fetchUserDetails(){
    this.obsvGetUser = this.authService.getUserDetails().subscribe((response) => {
        console.log('fetchUserDetails>> response: ', response);
        if (response.user) {
            this.storageService.set('user_details', JSON.stringify(response.user));      
            let role_id = this.storageService.get('user_details').role_id;
            if (role_id === 1) {//DUMMY
                response.permission = {};
            }
            this.storageService.setPermissions(response.permission);
            this.router.navigate(["/dashboard"]);       
            this.authService.setIsLoggedInInCheckUsingBS(true);
        }                        
    });
}
//................

//................
if (error.status === 401 || error.status === 0) {
    localStorage.clear();
    if (this.router.url != "/login") {
        location.reload();
    }
    return Observable.throw(error.json());
}
return Observable.throw(error.json()); 
//................

*/