
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { MessageService } from 'primeng/components/common/messageservice';
//import { ConfirmationService } from 'primeng/primeng';

import { AuthService } from "../auth.service";
import { SharedService } from "../../shared/shared.service";
import { DummyAPIService } from "../../shared/dummy-api.service";

@Component({
    selector: 'vfy-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.css'],
    providers: []
})

export class ForgotComponent implements OnInit, OnDestroy {    
    
    private subscriptionForgot:Subscription;       
    public username:string;
    public email:string;   
    public display:boolean = false;
   
    constructor(private messageService: MessageService, private authService:AuthService, private sharedService:SharedService, private dummyAPIService:DummyAPIService) {
        this.forgotCheck();                  
    }

    ngOnInit() {        
        this.username = "";
        this.email = "";
        this.display = false;
    } 

    ngOnDestroy() {           
        if (this.subscriptionForgot) {
            this.subscriptionForgot.unsubscribe(); 
            this.clearMessageService();
        }
    }
    //...................................................................


    //...................................................................
    forgotCheck(){
      this.authService.behaviorSubjectForgotInit().subscribe((bool) => { 
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
    }  

    clearMessageService(){
        this.messageService.clear();
    } 
    //...................................................................



    //................................................................... 
    public showForgot(){        
        this.display = true;
        this.clearMessageService();
    }
    //................................................................... 


    //...................................................................
    public closeBtnAction(){      
        this.username = "";
        this.email = "";
        this.display = false;       
    }

    public submitBtnAction() {  
        
        this.clearMessageService();
        
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

        this.authService.setBehaviorSubjectForgot(true);  
    }

    private setFailInfoMessageAndBehaviourSubject(obj:any){
        //console.log('setFailInfoMessageAndBehaviourSubject obj: ', obj);   
        
        let msgObj = {severity: 'error', summary: 'Forgot Password', detail: obj.statusText};            
        this.sharedService.setCurrentMsg(msgObj);  

        this.authService.setBehaviorSubjectForgot(true);  
    }
    //................................................................... 



}


