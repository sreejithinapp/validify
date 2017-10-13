
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
    public username:string;
    public email:string;   
    public display:boolean = false;
   
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
    public showForgot(){        
        this.display = true;
    }
    //................................................................... 


    //...................................................................
    public closeBtnAction(){      
        this.username = "";
        this.email = "";
        this.display = false;
    }

    public submitBtnAction() {  
        
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
   
    private dummyHttpResponse(){
        let response = this.dummyAPIService.getForgotResponse();       
        this.httpSuccess(response);
    }

    private httpSuccess(response:any){
        //console.log('httpSuccess>> response: ', response);       
        if (response.data) {   
            this.setSuccessInfoMessageAndBehaviourSubject({statusText: response.data.status});  
            this.closeBtnAction();   
        }                   
    }  

    private httpFail(error:any){
        //console.log('httpFail error: ', error);  
        this.setFailInfoMessageAndBehaviourSubject(error);             
    }
    //................................................................... 



    //................................................................... 
    private setSuccessInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setSuccessInfoMessageAndBehaviourSubject obj: ', obj);   
        
        let msgObj = {severity: 'success', summary: 'Forgot Password', detail: obj.statusText};            
        this.sharedService.setCurrentMsg(msgObj);  

        this.authService.setBehaviorSubjectBondSearch(true);  
    }

    private setFailInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setFailInfoMessageAndBehaviourSubject obj: ', obj);   
        
        let msgObj = {severity: 'error', summary: 'Forgot Password', detail: obj.statusText};            
        this.sharedService.setCurrentMsg(msgObj);  

        this.authService.setBehaviorSubjectForgot(true);  
    }
    //................................................................... 



}


