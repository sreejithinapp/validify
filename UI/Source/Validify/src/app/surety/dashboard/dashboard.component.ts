
import { Component, OnDestroy, OnInit, Inject, HostListener, ElementRef, ViewChild} from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { Subscription} from "rxjs/Subscription";
import { DOCUMENT } from '@angular/platform-browser';

import { MessageService } from 'primeng/components/common/messageservice';

import { SuretyService } from "../surety.service";
import { SharedService } from "../../shared/shared.service";
//import { StorageService } from "../../shared/storage.service";
import { DummyAPIService } from "../../shared/dummy-api.service";

import { Agency } from "./agency";
import { Agent } from "./agent";

@Component({
    selector: 'vfy-surety-dashboard', 
    templateUrl: './dashboard.component.html', 
    styleUrls: ['./dashboard.component.css'],
    providers: []
})

export class DashboardComponent implements OnInit, OnDestroy {       
    
    @ViewChild('agentDetailsTarget') private agentDetailsTarget: ElementRef;
    @ViewChild('agencyDetailsTarget') private agencyDetailsTarget: ElementRef;   
       
    private subscriptionDashboard:Subscription; 
    private subscriptionGetAgencyDetails:Subscription; 
    private subscriptionSaveAgencyDetails:Subscription;  

    public dashboardObj;
    public isAgencyDetails:boolean = false;
    public isAgentDetails:boolean = false;  
    public isActiveStatus:boolean = false;  
    public isDoiActivatedStatus:boolean = false;  
    public isActivatedStatus:boolean = false;        

    constructor(private router:Router, private messageService:MessageService, public agencyModel:Agency, public agentModel:Agent, private suretyService:SuretyService, private sharedService:SharedService, private dummyAPIService:DummyAPIService, @Inject(DOCUMENT) private document:Document) {
        this.dashboardCheck();      
    }

    ngOnInit() {  
        //ngOnInit            
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
        this.clearVars();
    } 
    //................................................................... 
    
   

    //...................................................................
    private clearVars(){       
        this.dashboardObj = null;
        this.clearDetailVars();      
    }

    private dashboardCheck(){ 
        this.clearVars();       
        this.subscriptionDashboard = this.suretyService.behaviorSubjectDashboardInit().subscribe((response) => {   
            console.log('SURETY dashboardCheck SUCCESS>> dashboard Obj,', response); 
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

        this.isAgencyDetails = true;      
        this.agencyDetailsTarget.nativeElement.scrollTop = this.agencyDetailsTarget.nativeElement.offsetTop; 
    }   

    public onAgencyCancelClick(){
        this.clearDetailVars();
        this.agencyDetailsTarget.nativeElement.scrollTop = 0;            
    }

    public onAgencySaveClick(){
        this.clearDetailVars();
        this.agencyDetailsTarget.nativeElement.scrollTop = 0;        
    }   

    private clearDetailVars(){         
        this.isAgencyDetails = false;
        this.isAgentDetails = false;  
        this.isActiveStatus = false;  
        this.isDoiActivatedStatus = false;  
        this.isActivatedStatus = false;    
    }


    //Get Selected Agency Details - GET API
    private getSelectedAgencyDetails(id:string) { 
        console.log('getSelectedAgencyDetails...licence_no: ', id)
        this.clearMessageService();
        this.subscriptionGetAgencyDetails = this.suretyService.getAgencyDetails(id).subscribe((response) => {
            //this.getAgencyDetailSuccess(response); //Depolyment
            this.dummyGetAgencyDetailResponse(); //DUMMY Test        
        }, (error) => {            
            //this.getAgencyDetailFail(error); //Depolyment               
            this.dummyGetAgencyDetailResponse(); //DUMMY Test
        });       
    }
   
    private dummyGetAgencyDetailResponse(){
        let response = this.dummyAPIService.getDashboardAgencyDetailsResponse(true); //true -> Success and false -> Fail
        //console.log('dummyGetAgencyDetailResponse: ', response);      
        if (response.status_code === 200){
            this.getAgencyDetailSuccess(response);
        } else {
            this.getAgencyDetailFail(response);
        }     
    }

    private getAgencyDetailSuccess(response:any){
        console.log('getAgencyDetailSuccess>> response: ', response);       
        if (response.data) {  
            this.agencyModel = response.data.AgencyDetails;
            console.log('getAgencyDetailSuccess>> this.agencyModel...', this.agencyModel);            
            this.setSuccessGetAgencyDetailsAndBehaviourSubject(response);       
        }   
    }  

    private getAgencyDetailFail(error:any){
        //console.log('getAgencyDetailFail error: ', error); 
        this.setFailGetAgencyDetailsAndBehaviourSubject(error);       
    }

    private setSuccessGetAgencyDetailsAndBehaviourSubject(obj:any){
        //console.log('setSuccessGetAgencyDetailsAndBehaviourSubject obj: ', obj);          
        let msgObj = {severity: 'success', summary: 'Surety Dashboard Get Top 5 Agency Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.showGrowlMessage();
    }

    private setFailGetAgencyDetailsAndBehaviourSubject(obj:any){
        //console.log('setFailGetAgencyDetailsAndBehaviourSubject obj: ', obj);           
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
            this.setSuccessSaveAgencyDetailsAndBehaviourSubject(response);       
        }   
    }  

    private saveAgencyDetailFail(error:any){
        console.log('saveAgencyDetailFail error: ', error); 
        this.setFailSaveAgencyDetailsAndBehaviourSubject(error);       
    }

    private setSuccessSaveAgencyDetailsAndBehaviourSubject(obj:any){
        //console.log('setSuccessSaveAgencyDetailsAndBehaviourSubject obj: ', obj);          
        let msgObj = {severity: 'success', summary: 'Surety Dashboard Save Selected Agency Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj); 
        this.showGrowlMessage();        
    }

    private setFailSaveAgencyDetailsAndBehaviourSubject(obj:any){
        //console.log('setFailSaveAgencyDetailsAndBehaviourSubject obj: ', obj);           
        let msgObj = {severity: 'error', summary: 'Surety Dashboard Save Selected Agency Details', detail: obj.status_text};            
        this.sharedService.setCurrentMsg(msgObj);  
        this.showGrowlMessage(); 
    }
    //...................................................................  



    //...................................................................
    public onAgentClick(item:any){
        //console.log('onAgentClick:', item);
        this.clearDetailVars();
        this.isAgentDetails = true;
        this.agentDetailsTarget.nativeElement.scrollTop = this.agentDetailsTarget.nativeElement.offsetTop; 
    }

    public onAgentCancelClick(){
        this.clearDetailVars();
        this.agentDetailsTarget.nativeElement.scrollTop = 0;         
    }

    public onAgentSaveClick(){
        this.clearDetailVars();
        this.agentDetailsTarget.nativeElement.scrollTop = 0;         
    }
    //...................................................................
   
}




