
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { MessageService } from 'primeng/components/common/messageservice';

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
   
    constructor(private messageService:MessageService, private authService:AuthService, private sharedService:SharedService, private dummyAPIService:DummyAPIService) {
        //constructor                 
    }

    ngOnInit() {        
        this.clearVars();      
    } 

    ngOnDestroy() {           
        if (this.subscriptionForgot) {
            this.subscriptionForgot.unsubscribe();            
        }
        this.clearVars();
        this.clearMessageService();  
    }
    //...................................................................


    //...................................................................
    private clearVars(){
        this.display = false;        
        this.username = "";
        this.email = "";
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
    public showForgot(){        
        this.display = true;
        this.clearMessageService();
    }
  
    public closeBtnAction(){      
        this.username = "";
        this.email = "";
        this.display = false;          
    }

    public submitBtnAction() {          
        this.clearMessageService();        
        if (this.username.length > 3 && this.email.length > 3) {            
            this.subscriptionForgot = this.authService.forgot(this.username, this.email).subscribe((response) => {
                //this.forgotSuccess(response); //Depolyment
                this.dummyForgotResponse(); //DUMMY Test            
            }, (error) => {            
                //this.forgotFail(error); //Depolyment              
                this.dummyForgotResponse(); //DUMMY Test
            });
        } else { 
            this.setFailMessage({status_text:"Please fill all the fields!"});
        }
    }
   
    private dummyForgotResponse(){
        let response = this.dummyAPIService.getForgotResponse(true); //true -> Success and false -> Fail      
        if (response.status_code === 200){
            this.forgotSuccess(response);
        } else {
            this.forgotFail(response); 
        }         
    }

    private forgotSuccess(response:any){
        //console.log('forgotSuccess>> response: ', response);       
        if (response.data) {   
            this.closeBtnAction();  
            this.setSuccessMessage(response);               
        }                   
    }  

    private setSuccessMessage(obj:any){               
        let msgObj = {severity: 'success', summary: 'Forgot Password', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.showGrowlMessage();  
    }

    private forgotFail(error:any){
        //console.log('forgotFail error: ', error);  
        this.setFailMessage(error);             
    }

    private setFailMessage(obj:any){               
        let msgObj = {severity: 'error', summary: 'Forgot Password', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.showGrowlMessage();        
    }
    //................................................................... 

}


