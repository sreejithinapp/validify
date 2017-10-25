
import { Component, OnDestroy, OnInit, Inject, HostListener, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { Subscription} from "rxjs/Subscription";
import { DOCUMENT } from '@angular/platform-browser';

import { MessageService } from 'primeng/components/common/messageservice';

import { SuretyService } from "../surety.service";
import { SharedService } from "../../shared/shared.service";
import { DummyAPIService } from "../../shared/dummy-api.service";

import { Agency } from "./agency";
import { Agent } from "./agent";

@Component({
    selector: 'vfy-surety-dashboard', 
    templateUrl: './dashboard.component.html', 
    styleUrls: ['./dashboard.component.css'],
    providers: [Agency, Agent]
})

export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {       
    
    @ViewChild('agentDetailsTarget') private agentDetailsTarget:any;
    @ViewChild('agencyDetailsTarget') private agencyDetailsTarget:any;   
       
    private subscriptionDashboard:Subscription;     
    private subscriptionGetAgencyDetails:Subscription; 
    private subscriptionSaveAgencyDetails:Subscription; 
    private subscriptionGetAgentDetails:Subscription; 
    private subscriptionSaveAgentDetails:Subscription;  

    public dashboardObj;
    public historyObj;
    public isAgencyDetails:boolean = false;
    public isAgentDetails:boolean = false;  
    public isActiveStatus:boolean = false;  
    public isDoiActivatedStatus:boolean = false;  
    public isActivatedStatus:boolean = false;      

    //@Inject(DOCUMENT) private document:Document
    constructor(private router:Router, private messageService:MessageService, public agencyModel:Agency, public agentModel:Agent, private suretyService:SuretyService, private sharedService:SharedService, private dummyAPIService:DummyAPIService) {
        this.dashboardCheck();      
    }

    ngOnInit() {         
        //console.log('ngOnInit');          
    }     

    ngOnDestroy() {        
        if (this.subscriptionDashboard){
            this.subscriptionDashboard.unsubscribe();  
        }

        if (this.subscriptionGetAgencyDetails){
            this.subscriptionGetAgencyDetails.unsubscribe();  
        }
        if (this.subscriptionSaveAgencyDetails){
            this.subscriptionSaveAgencyDetails.unsubscribe();  
        }

        if (this.subscriptionGetAgentDetails){
            this.subscriptionGetAgentDetails.unsubscribe();  
        }
        if (this.subscriptionSaveAgentDetails){
            this.subscriptionSaveAgentDetails.unsubscribe();  
        }
        this.clearVars();
        this.clearMessageService();  
    } 
    
    ngAfterViewInit() {  
        //console.log('ngAfterViewInit');  
    }
    //................................................................... 
    
   

    //...................................................................
    private clearVars(){       
        this.dashboardObj = null;
        this.clearDetailVars();      
    }

    private clearDetailVars(){         
        this.isAgencyDetails = false;
        this.isAgentDetails = false;  
        this.isActiveStatus = false;  
        this.isDoiActivatedStatus = false;  
        this.isActivatedStatus = false;    
    }

    private dashboardCheck(){  
        this.clearVars();      
        this.subscriptionDashboard = this.suretyService.behaviorSubjectDashboardInit().subscribe((response) => {   
            //console.log('SURETY dashboardCheck SUCCESS>> dashboard Obj,', response); 
            if (response){
                this.showGrowlMessage(); 
                this.dashboardObj = response;    
            }              
        }, (error) => {  
            console.log('SURETY dashboardCheck ERROR>> Error: ', error);   
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
    public onAgencyClick(item:any){
        //console.log('onAgencyClick:', item);
        this.clearDetailVars();     
        this.getSelectedAgencyDetails(item.licence_no);      
    }   

    public onAgencyCancelClick(){  
        this.clearDetailVars();          
    }

    public onAgencySaveClick(){
        this.saveAgencyDetails();              
    }   

    private scrollToAgencyDetails(){
        try {               
            this.agencyDetailsTarget.nativeElement.scrollTop = this.agencyDetailsTarget.nativeElement.offsetTop; //offsetTop / scrollHeight
        } catch (err) {           
            console.log('scrollToAgencyDetails error', err);
        }
    }       


    //Get Selected Agency Details - GET API
    private getSelectedAgencyDetails(id:string) { 
        console.log('getSelectedAgencyDetails...licence_no: ', id)
        this.clearMessageService();
        this.subscriptionGetAgencyDetails = this.suretyService.getAgencyDetails(id).subscribe((response) => {
            //this.getAgencyDetailSuccess(response, id); //Depolyment
            this.dummyGetAgencyDetailResponse(id); //DUMMY Test        
        }, (error) => {            
            //this.getAgencyDetailFail(error); //Depolyment               
            this.dummyGetAgencyDetailResponse(id); //DUMMY Test
        });       
    }
   
    private dummyGetAgencyDetailResponse(id:string){
        let response = this.dummyAPIService.getDashboardAgencyDetailsResponse(true); //true -> Success and false -> Fail
        //console.log('dummyGetAgencyDetailResponse: ', response);      
        if (response.status_code === 200){
            this.getAgencyDetailSuccess(response, id);
        } else {
            this.getAgencyDetailFail(response);
        }     
    }

    private getAgencyDetailSuccess(response:any, id:string){
        console.log('getAgencyDetailSuccess>> response: ', response);       
        if (response.data) {  
            this.agencyModel = response.data.AgencyDetails;
            this.agencyModel.SelAgencyLicenseNum = id;
            console.log('getAgencyDetailSuccess>> this.agencyModel...', this.agencyModel);   

            this.historyObj = response.data.AgencySuspensionHistory;
            console.log('getAgencyDetailSuccess>> this.historyObj...', this.historyObj);             

            this.setSuccessGetAgencyDetails(response);       
        }   
    }  

    private getAgencyDetailFail(error:any){
        //console.log('getAgencyDetailFail error: ', error); 
        this.setFailGetAgencyDetails(error);       
    }

    private setSuccessGetAgencyDetails(obj:any){
        //console.log('setSuccessGetAgencyDetails obj: ', obj);          
        let msgObj = {severity: 'success', summary: 'Surety Dashboard Get Top 5 Agency Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj); 
        this.showGrowlMessage();   

        this.isAgencyDetails = true;   
        setTimeout(() => {this.scrollToAgencyDetails();}, 100);           
    }

    private setFailGetAgencyDetails(obj:any){
        //console.log('setFailGetAgencyDetails obj: ', obj);           
        let msgObj = {severity: 'error', summary: 'Surety Dashboard Get Top 5 Agency Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.showGrowlMessage(); 
    }



    //Save Agency Details - POST API
    private saveAgencyDetails() { 
        console.log('saveAgencyDetails...this.agencyModel: ', this.agencyModel)
        this.clearMessageService();
        this.subscriptionSaveAgencyDetails = this.suretyService.saveAgencyDetails(this.agencyModel).subscribe((response) => {
            //this.saveAgencyDetailSuccess(response); //Depolyment
            this.dummySaveAgencyDetailResponse(); //DUMMY Test        
        }, (error) => {            
            //this.saveAgencyDetailFail(error); //Depolyment               
            this.dummySaveAgencyDetailResponse(); //DUMMY Test
        });       
    }
   
    private dummySaveAgencyDetailResponse(){
        let response = this.dummyAPIService.saveDashboardAgencyDetailsResponse(true);
        //console.log('dummySaveAgencyDetailResponse: ', response);
        if (response.status_code === 200){
            this.saveAgencyDetailSuccess(response);
        } else {
            this.saveAgencyDetailFail(response);
        }        
    }

    private saveAgencyDetailSuccess(response:any){
        console.log('saveAgencyDetailSuccess>> response: ', response);       
        if (response.data) {  
            this.setSuccessSaveAgencyDetails(response);       
        }   
    }  

    private saveAgencyDetailFail(error:any){
        console.log('saveAgencyDetailFail error: ', error); 
        this.setFailSaveAgencyDetails(error);       
    }

    private setSuccessSaveAgencyDetails(obj:any){
        //console.log('setSuccessSaveAgencyDetails obj: ', obj);          
        let msgObj = {severity: 'success', summary: 'Surety Dashboard Save Selected Agency Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj); 
        this.showGrowlMessage();   

        this.onAgencyCancelClick();       
    }

    private setFailSaveAgencyDetails(obj:any){
        //console.log('setFailSaveAgencyDetails obj: ', obj);           
        let msgObj = {severity: 'error', summary: 'Surety Dashboard Save Selected Agency Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.showGrowlMessage(); 
    }
    //...................................................................  



    //...................................................................
    public onAgentClick(item:any){
        //console.log('onAgentClick:', item);   
        this.clearDetailVars();     
        this.getSelectedAgentDetails(item.licence_no);         
    }

    public onAgentCancelClick(){  
        this.clearDetailVars();       
    }

    public onAgentSaveClick(){  
        this.saveAgentDetails();          
    }

    private scrollToAgentDetails(){
        try {               
            this.agentDetailsTarget.nativeElement.scrollTop = this.agentDetailsTarget.nativeElement.offsetTop; //offsetTop / scrollHeight
        } catch (err) {           
            console.log('scrollToAgentDetails error', err);
        }
    }   

    //Get Selected Agent Details - GET API
    private getSelectedAgentDetails(id:string) { 
        console.log('getSelectedAgentDetails...licence_no: ', id)
        this.clearMessageService();
        this.subscriptionGetAgencyDetails = this.suretyService.getAgencyDetails(id).subscribe((response) => {
            //this.getAgentDetailSuccess(response); //Depolyment
            this.dummyGetAgentDetailResponse(); //DUMMY Test        
        }, (error) => {            
            //this.getAgentDetailFail(error); //Depolyment               
            this.dummyGetAgentDetailResponse(); //DUMMY Test
        });       
    }
   
    private dummyGetAgentDetailResponse(){
        let response = this.dummyAPIService.getDashboardAgentDetailsResponse(true); //true -> Success and false -> Fail
        //console.log('dummyGetAgentDetailResponse: ', response);      
        if (response.status_code === 200){
            this.getAgentDetailSuccess(response);
        } else {
            this.getAgentDetailFail(response);
        }     
    }

    private getAgentDetailSuccess(response:any){
        console.log('getAgentDetailSuccess>> response: ', response);       
        if (response.data) {  
            this.agentModel = response.data.AgentDetails;
            console.log('getAgentDetailSuccess>> this.agentModel...', this.agentModel);            
            this.setSuccessGetAgentDetails(response);       
        }   
    }  

    private getAgentDetailFail(error:any){
        //console.log('getAgentDetailFail error: ', error); 
        this.setFailGetAgentDetails(error);       
    }

    private setSuccessGetAgentDetails(obj:any){
        //console.log('setSuccessGetAgentDetails obj: ', obj);          
        let msgObj = {severity: 'success', summary: 'Surety Dashboard Get Top 5 Agent Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj); 
        this.showGrowlMessage();   

        this.isAgentDetails = true;   
        setTimeout(() => {this.scrollToAgentDetails();}, 100);           
    }

    private setFailGetAgentDetails(obj:any){
        //console.log('setFailGetAgentDetails obj: ', obj);           
        let msgObj = {severity: 'error', summary: 'Surety Dashboard Get Top 5 Agent Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.showGrowlMessage(); 
    }



    //Save Agent Details - POST API
    private saveAgentDetails() { 
        console.log('saveAgentDetails...this.agentModel: ', this.agentModel)
        this.clearMessageService();
        this.subscriptionSaveAgentDetails = this.suretyService.saveAgentDetails(this.agentModel).subscribe((response) => {
            //this.saveAgentDetailSuccess(response); //Depolyment
            this.dummySaveAgentDetailResponse(); //DUMMY Test        
        }, (error) => {            
            //this.saveAgentDetailFail(error); //Depolyment               
            this.dummySaveAgentDetailResponse(); //DUMMY Test
        });       
    }
   
    private dummySaveAgentDetailResponse(){
        let response = this.dummyAPIService.saveDashboardAgentDetailsResponse(true);
        //console.log('dummySaveAgentDetailResponse: ', response);
        if (response.status_code === 200){
            this.saveAgentDetailSuccess(response);
        } else {
            this.saveAgentDetailFail(response);
        }        
    }

    private saveAgentDetailSuccess(response:any){
        console.log('saveAgentDetailSuccess>> response: ', response);       
        if (response.data) {  
            this.setSuccessSaveAgentDetails(response);       
        }   
    }  

    private saveAgentDetailFail(error:any){
        console.log('saveAgentDetailFail error: ', error); 
        this.setFailSaveAgentDetails(error);       
    }

    private setSuccessSaveAgentDetails(obj:any){
        //console.log('setSuccessSaveAgentDetails obj: ', obj);          
        let msgObj = {severity: 'success', summary: 'Surety Dashboard Save Selected Agent Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj); 
        this.showGrowlMessage();   
        this.onAgentCancelClick();       
    }

    private setFailSaveAgentDetails(obj:any){
        //console.log('setFailSaveAgentDetails obj: ', obj);           
        let msgObj = {severity: 'error', summary: 'Surety Dashboard Save Selected Agent Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.showGrowlMessage(); 
    }    
    //...................................................................
   
}




