
import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SharedService } from "../shared/shared.service";
import { StorageService } from "../shared/storage.service";
import { HttpService } from "../shared/http-service/http.service";
import { Constants } from "../shared/constants";

import { Agency } from "./dashboard/agency";
import { Agent } from "./dashboard/agent";

@Injectable()
export class DoiService {        

    private behaviorSubjectUserInfo; 
    private behaviorSubjectDashboard;    
    
    constructor(private sharedService:SharedService, private storageService:StorageService, private httpService:HttpService) {
        //constructor
    }
    //.................................................

    
    //............................................... 
    //UserInfo      
    behaviorSubjectUserInfoInit() {  
        this.behaviorSubjectUserInfo = new BehaviorSubject(this.getUserInfoObj());
        return this.behaviorSubjectUserInfo.asObservable();
    }       
    setBehaviorSubjectUserInfo(obj:any) {
        this.behaviorSubjectUserInfo.next(obj);
    }     
    getUserInfoObj() { 
        return this.storageService.get('userinfo');   
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
        //console.log('getAgencyDetails API id: ', id);  
        return this.httpService.httpGet(Constants.getDoiDashboardAgencyDetails + id);         
    }
    saveAgencyDetails(agencyModel:Agency) {  
        //console.log('saveAgencyDetails agencyModel obj: ', agencyModel);    
        return this.httpService.httpPost(Constants.saveDoiDashboardAgencyDetails, agencyModel);
    }
    //...............................................


    //...............................................
    //Dashboard Agent Details - API
    getAgentDetails(id:string) {  
        //console.log('getAgentDetails API id: ', id);  
        return this.httpService.httpGet(Constants.getDoiDashboardAgentDetails + id);         
    }
    saveAgentDetails(agentModel:Agent) {  
        //console.log('saveAgentDetails agentModel obj: ', agentModel);    
        return this.httpService.httpPost(Constants.saveDoiDashboardAgentDetails, agentModel);
    }
    //...............................................

}



