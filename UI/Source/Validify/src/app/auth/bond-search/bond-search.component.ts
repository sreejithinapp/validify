
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { AuthService } from "../auth.service";
import { SharedService } from "../../shared/shared.service";
import { DummyAPIService } from "../../shared/dummy-api.service";

@Component({
    selector: 'vfy-bond-search',
    templateUrl: './bond-search.component.html',
    styleUrls: ['./bond-search.component.css']   
})

export class BondSearchComponent implements OnInit, OnDestroy {    
    
    private subscriptionBondSearch:Subscription;    
    private bondSearchResultElemStatus:boolean = false;
    private bondSearchTxt:string;
    private searchResultObj;

    constructor(private authService:AuthService, private sharedService:SharedService, private dummyAPIService:DummyAPIService) {
        //constructor         
    }

    ngOnInit() {
        //ngOnInit
        this.bondSearchResultElemStatus = false;
        this.bondSearchTxt = "";
    } 

    ngOnDestroy() {        
        if (this.subscriptionBondSearch) this.subscriptionBondSearch.unsubscribe(); 
    }
    //...................................................................


    //...................................................................
    bondSearchCloseBtnAction(){
        this.bondSearchResultElemStatus = false;
        this.bondSearchTxt = "";
    }

    bondSearchBtnAction() { 
        
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
   
    dummyBondSearchResponse(){
        let response = this.dummyAPIService.getBondSearchResponse();
        //console.log('dummyBondSearchResponse: ', response);
        this.bondSearchSuccess(response);
    }

    bondSearchSuccess(response:any){
        //console.log('bondSearchSuccess>> response: ', response);       
        if (response.data) {           
            this.searchResultObj = {};  
            this.searchResultObj = response.data;   
            this.setSuccessInfoMessageAndBehaviourSubject({statusText: "Bond Search Success!"});       
        }        
        this.bondSearchResultElemStatus = true;        
    }  

    bondSearchFail(error:any){
        //console.log('bondSearchFail error: ', error); 
        this.setFailInfoMessageAndBehaviourSubject(error);       
    }
    //...................................................................  


    //................................................................... 
    setSuccessInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setSuccessInfoMessageAndBehaviourSubject obj: ', obj);   
        
        let msgObj = {severity: 'success', summary: 'Public Bond Search', detail: obj.statusText};            
        this.sharedService.setCurrentMsg(msgObj);  

        this.authService.setBehaviorSubjectBondSearch(true);  
    }

    setFailInfoMessageAndBehaviourSubject(obj:any){
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