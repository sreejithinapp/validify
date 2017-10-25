
import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SharedService } from "../shared/shared.service";
import { StorageService } from "../shared/storage.service";
import { HttpService } from "../shared/http-service/http.service";
import { Constants } from "../shared/constants";

import { Agency } from "./dashboard/agency";
import { Agent } from "./dashboard/agent";

@Injectable()
export class SuretyService {        

    private behaviorSubjectMessage;
    private behaviorSubjectDashboard;    
    
    constructor(private sharedService:SharedService, private storageService:StorageService, private httpService:HttpService) {
        //constructor
    }
    //.................................................


    //...............................................  
    //MESSAGE 
    behaviorSubjectMessageInit() {  
        this.behaviorSubjectMessage = new BehaviorSubject(this.getMessageObj());
        return this.behaviorSubjectMessage.asObservable();
    }       
    setBehaviorSubjectMessage(obj:any) {
        this.behaviorSubjectMessage.next(obj);
    }     
    getMessageObj() {       
        return this.sharedService.getCurrentMsg();           
    }
    //...............................................


    //...............................................  
    //DASHBOARD 
    behaviorSubjectDashboardInit() {  
        this.behaviorSubjectDashboard = new BehaviorSubject(this.getDashboardObj());
        return this.behaviorSubjectDashboard.asObservable();
    }       
    setBehaviorSubjectDashboard(obj:any) {
        this.behaviorSubjectDashboard.next(obj);
    }     
    getDashboardObj() { 
        return this.storageService.get('dashboard');  
    }
    //...............................................
   

    //...............................................
    //Dashboard Agency Details -  API
    getAgencyDetails(id:string) {  
        console.log('getAgencyDetails API id: ', id);  
        return this.httpService.httpGet(Constants.getSuretyDashboardAgencyDetails + id);         
    }
    saveAgencyDetails(agencyModel:Agency) {  
        console.log('saveAgencyDetails agencyModel obj: ', agencyModel);    
        return this.httpService.httpPost(Constants.saveSuretyDashboardAgencyDetails, agencyModel);
    }
    //...............................................


    //...............................................
    //Dashboard Agent Details - API
    getAgentDetails(id:string) {  
        console.log('getAgentDetails API id: ', id);  
        return this.httpService.httpGet(Constants.getSuretyDashboardAgentDetails + id);         
    }
    saveAgentDetails(agentModel:Agent) {  
        console.log('saveAgentDetails agentModel obj: ', agentModel);    
        return this.httpService.httpPost(Constants.saveSuretyDashboardAgentDetails, agentModel);
    }
    //...............................................

}



