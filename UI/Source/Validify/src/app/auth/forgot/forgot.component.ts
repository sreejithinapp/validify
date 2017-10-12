
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { Message } from "primeng/components/common/message";
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/primeng';

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
    //private forgotElemStatus:boolean = false;
    private username:string;
    private email:string;
    private resultObj;
    private display:boolean = false;

    constructor(private authService:AuthService, private sharedService:SharedService, private dummyAPIService:DummyAPIService) {
        //constructor         
    }

    ngOnInit() {
        //ngOnInit
        //this.forgotElemStatus = false;
        this.username = "";
        this.email = "";
        this.display = true;
    } 

    ngOnDestroy() {        
        if (this.subscriptionForgot) this.subscriptionForgot.unsubscribe(); 
    }
    //...................................................................


    //...................................................................
    closeBtnAction(){
        //this.forgotElemStatus = false;
        this.username = "";
        this.email = "";
    }

    submitBtnAction() { 
        if (this.username.length > 3 && this.email.length > 3) {
            this.subscriptionForgot = this.authService.forgot(this.username, this.email).subscribe((response) => {
                //this.httpSuccess(response); //Depolyment
                this.dummyHttpResponse(); //DUMMY Test
            }, (error) => {            
                //this.httpFail(error); //Depolyment
                //this.httpFail({statusText:"No Result Found!"});
                this.dummyHttpResponse(); //DUMMY Test
            });
        } else {           
            this.httpFail({statusText:"Please fill all the fields!"});
        }
    }
   
    dummyHttpResponse(){
        let response = this.dummyAPIService.getBondSearchResponse();
        //console.log('dummyHttpResponse: ', response);
        this.httpSuccess(response);
    }

    httpSuccess(response:any){
        //console.log('httpSuccess>> response: ', response);       
        if (response.data) {           
            this.resultObj = {};  
            this.resultObj = response.data;         
        }        
        //this.forgotElemStatus = true;   
        this.httpFail({statusText:"Forgot password action completed!"});     
    }  

    httpFail(error:any){
        //console.log('httpFail error: ', error);   
        let msgObj = {severity: 'error', summary: 'Error', detail: error.statusText};            
        this.sharedService.setCurrentMsg(msgObj);  
        //this.authService.setBehaviorSubjectForgot(true);           
    }
    //...................................................................   

}


