
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Login } from "./login/login";

import { HttpService } from "../shared/http-service/http.service";
import { StorageService } from "../shared/storage.service";
import { Constants } from "../shared/constants";


@Injectable()
export class AuthService {  
  
  private bsForLoginCheck;
  private bsForRoleCheck;

  constructor(private storage:StorageService, private httpService:HttpService) {
    //constructor
  }

  //LOGIN CHECK
  isLoggedIn() {   
    //group2 - doi | group1 - surety
    //this.storage.remove("auth_token"); this.storage.remove("user_role"); //dummy
    return this.storage.get('auth_token') ? true : false;
  } 
  isLoggedInCheckUsingBS() {  
    this.bsForLoginCheck = new BehaviorSubject(this.isLoggedIn());
    return this.bsForLoginCheck.asObservable();
  }     
  setIsLoggedInInCheckUsingBS(bool:boolean) {
    this.bsForLoginCheck.next(bool);
  }  

  //ROLE CHECK
  getWhichRole() {   
    return this.storage.get('user_role');  
  } 
  isWhichRoleCheckUsingBS() {  
    this.bsForRoleCheck = new BehaviorSubject(this.getWhichRole());
    return this.bsForRoleCheck.asObservable();
  }     
  setIsWhichRoleCheckUsingBS(roleID:string) {
    this.bsForRoleCheck.next(roleID);
  }  


  //LOGIN ACTION - POST API
  login(loginModel:Login) {      
    return this.httpService.httpPost(Constants.login, {email: loginModel.username, password: loginModel.password, remember: loginModel.remember});
  }
  
  //LOGOUT ACTION - POST API
  logout() {
    return this.httpService.httpPost(Constants.logout, {});
  }
  
  //GET USER
  getUserDetails() {
    return this.httpService.httpGet(Constants.userdetails);
  } 

  //GET PERMISSIONS 
  getPermissions(role_id) {
     return this.httpService.httpGet('role/role_permission/' + role_id);
  }
 
}


/*
http://192.168.1.90:8000/api/v1/account/login/
{
	"data": {
    	"id": 4,
    	"auth_token": "f04715467f41f642ecadf74f9846eb4e82d05bad",
    	"username": "doi",
    	"email": "doi@validify.com",
    	"first_name": "Doi",
    	"last_name": "Validify",
    	"is_active": true,
    	"date_joined": "2017-09-25T10:42:30Z",
    	"dashboard": {
        	"suspensions": {},
        	"liabilities": {
            	"amount": "5.2B",
            	"bonds": 40000
        	},
        	"forfeitures": {
            	"amount": "1.2M",
            	"bonds": 250
        	},
        	"bond_increase_requests": null,
        	"unpaid_judgements": {
            	"amount": "2.3K",
            	"bonds": "200"
        	},
        	"inventory_remaining": null,
        	"top_agents": [
            	{
                	"agent_name": "Dwayne Smith",
                	"forfeited_in": "325,000",
                	"name": "Hardford Bail Bonds",
                	"no_of_forfeited_bond": 2,
                	"agent_licence_no": "FELO2584659",
                	"agency_licence_no": "FBAO25234",
                	"forfeited_percent": 3.46
            	},
            	{
                	"agent_name": "Andrew Smalltown",
                	"forfeited_in": "300,000",
                	"name": "Hudson River Bail Bonds",
                	"no_of_forfeited_bond": 2,
                	"agent_licence_no": "XAQ09863548",
                	"agency_licence_no": "TAZO586858",
                	"forfeited_percent": 3.14
            	},
            	{
                	"agent_name": "Pablo Goldsmith",
                	"forfeited_in": "200,000",
                	"name": "Fordelity Bail Bonds",
                	"no_of_forfeited_bond": 5,
                	"agent_licence_no": "ADX0856974",
                	"agency_licence_no": "XAZ895334",
                	"forfeited_percent": 2.16
            	},
            	{
                	"agent_name": "Xavier Montgomery",
                	"forfeited_in": "160,000",
                	"name": "Lexington City Bail Bonds",
                	"no_of_forfeited_bond": 4,
                	"agent_licence_no": "OPN014254728",
                	"agency_licence_no": "ZASO252585",
                	"forfeited_percent": 1.73
            	},
            	{
                	"agent_name": "Yoest Shane",
                	"forfeited_in": "100,000",
                	"name": "Pacific Life",
                	"no_of_forfeited_bond": 2,
                	"agent_licence_no": "YSN014254728",
                	"agency_licence_no": "PASO363636",
                	"forfeited_percent": 1.13
            	}
        	],
        	"top_agencies": [
            	{
                	"forfeited_in": "600,000",
                	"name": "Ami First Bail Bonds",
                	"no_of_forfeited_bond": 4,
                	"inventory_remaining": "350,000",
                	"forfeited_percent": 6.22,
                	"licence_no": "FELO2584659"
            	},
            	{
                	"forfeited_in": "550,000",
                	"name": "Capitol Bail Bond",
                	"no_of_forfeited_bond": 4,
                	"inventory_remaining": "600,000",
                	"forfeited_percent": 5.85,
                	"licence_no": "FELO2584659"
            	},
            	{
                	"forfeited_in": "375,000",
                	"name": "Great South Bail Bonding",
                	"no_of_forfeited_bond": 3,
                	"inventory_remaining": "450,000",
                	"forfeited_percent": 3.93,
                	"licence_no": "FELO2584659"
            	},
            	{
                	"forfeited_in": "285,000",
                	"name": "Mint Valley Bail Bonds",
                	"no_of_forfeited_bond": 3,
                	"inventory_remaining": "750,000",
                	"forfeited_percent": 3.08,
                	"licence_no": "FELO2584659"
            	},
            	{
                	"forfeited_in": "105,000",
                	"name": "Symetra",
                	"no_of_forfeited_bond": 2,
                	"inventory_remaining": "500,000",
                	"forfeited_percent": 0.28,
                	"licence_no": "FELO2584659"
            	}
        	]
    	},
    	"user_role": "group2"
	}
}


{
"email": "doi@validify.com", "password": "doi"
}



http://192.168.1.90:8000/api/v1/search/

{
	"status_code": 200,
	"data": {
    	"defendant_name": "John Smith",
    	"court_city": "San Jose",
    	"court_address": "191 N 1st St",
    	"next_court_date": "08/03/2017",
    	"court_time": "8:30AM–5PM",
    	"court_date_history": [
        	{
            	"date": "08/03/2017",
            	"availability": "Y"
        	},
        	{
            	"date": "08/07/2017",
            	"availability": "N"
        	}
    	],
    	"charge": "5000",
    	"bond_amount": 3000,
    	"court_state": "CA",
    	"court_type": "Superior"
	}
}
*/