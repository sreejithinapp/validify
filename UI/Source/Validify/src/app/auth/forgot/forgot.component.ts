
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { AuthService } from "../auth.service";
import { SharedService } from "../../shared/shared.service";
import { DummyAPIService } from "../../shared/dummy-api.service";

@Component({
    selector: 'vfy-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.css']   
})

export class ForgotComponent implements OnInit, OnDestroy {    
    
    private subscriptionForgot:Subscription;       
    private username:string;
    private email:string;   
    private display:boolean = false;
   
    constructor(private authService:AuthService, private sharedService:SharedService, private dummyAPIService:DummyAPIService) {
        //constructor         
    }

    ngOnInit() {        
        this.username = "";
        this.email = "";
        this.display = false;
    } 

    ngOnDestroy() {        
        if (this.subscriptionForgot) this.subscriptionForgot.unsubscribe(); 
    }
    //...................................................................


    //................................................................... 
    showForgot(){        
        this.display = true;
    }
    //................................................................... 


    //...................................................................
    closeBtnAction(){      
        this.username = "";
        this.email = "";
        this.display = false;
    }

    submitBtnAction() {  
        
        if (this.username.length > 3 && this.email.length > 3) {
            
            this.subscriptionForgot = this.authService.forgot(this.username, this.email).subscribe((response) => {
                //this.httpSuccess(response); //Depolyment
                this.dummyHttpResponse(); //DUMMY Test
            
            }, (error) => {            
                //this.httpFail(error); //Depolyment              
                this.dummyHttpResponse(); //DUMMY Test
            });

        } else { 
            this.setFailInfoMessageAndBehaviourSubject({statusText:"Please fill all the fields!"});
        }
    }
   
    dummyHttpResponse(){
        let response = this.dummyAPIService.getForgotResponse();       
        this.httpSuccess(response);
    }

    httpSuccess(response:any){
        //console.log('httpSuccess>> response: ', response);       
        if (response.data) {   
            this.setSuccessInfoMessageAndBehaviourSubject({statusText: response.data.status});  
            this.closeBtnAction();   
        }                   
    }  

    httpFail(error:any){
        //console.log('httpFail error: ', error);  
        this.setFailInfoMessageAndBehaviourSubject(error);             
    }
    //................................................................... 



    //................................................................... 
    setSuccessInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setSuccessInfoMessageAndBehaviourSubject obj: ', obj);   
        
        let msgObj = {severity: 'success', summary: 'Forgot Password', detail: obj.statusText};            
        this.sharedService.setCurrentMsg(msgObj);  

        this.authService.setBehaviorSubjectBondSearch(true);  
    }

    setFailInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setFailInfoMessageAndBehaviourSubject obj: ', obj);   
        
        let msgObj = {severity: 'error', summary: 'Forgot Password', detail: obj.statusText};            
        this.sharedService.setCurrentMsg(msgObj);  

        this.authService.setBehaviorSubjectForgot(true);  
    }
    //................................................................... 



}


