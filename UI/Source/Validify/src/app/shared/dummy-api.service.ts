import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DummyAPIService {  
   
    constructor() {
        //constructor
    }
    //.................................................


    //.................................................
    public getLoginResponseDOI() {

        const obj = {  

	        "data": {

                "id": 4,

                "auth_token": "f04715467f41f642ecadf74f9846eb4e82d05bad",

                "user_role": "group2",

                "username": "doi",
                "email": "doi@validify.com",

                "first_name": "DOI",
                "last_name": "Validify",

                "is_active": true,
                "date_joined": "2017-09-25T10:42:30Z",

                "dashboard": {
                    
                    "suspensions": {},

                    "liabilities": {
                        "amount": "5.2B",
                        "bonds": '40,000'
                    },

                    "forfeitures": {
                        "amount": "1.2M",
                        "bonds": '250'
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
                            "agency_name": "Hardford Bail Bonds",
                            "no_of_forfeited_bond": 2,
                            "agent_licence_no": "FELO2584659",
                            "agency_licence_no": "FBAO25234",
                            "forfeited_percent": 3.46
                        },
                        {
                            "agent_name": "Andrew Smalltown",
                            "forfeited_in": "300,000",
                            "agency_name": "Hudson River Bail Bonds",
                            "no_of_forfeited_bond": 2,
                            "agent_licence_no": "XAQ09863548",
                            "agency_licence_no": "TAZO586858",
                            "forfeited_percent": 3.14
                        },
                        {
                            "agent_name": "Pablo Goldsmith",
                            "forfeited_in": "200,000",
                            "agency_name": "Fordelity Bail Bonds",
                            "no_of_forfeited_bond": 5,
                            "agent_licence_no": "ADX0856974",
                            "agency_licence_no": "XAZ895334",
                            "forfeited_percent": 2.16
                        },
                        {
                            "agent_name": "Xavier Montgomery",
                            "forfeited_in": "160,000",
                            "agency_name": "Lexington City Bail Bonds",
                            "no_of_forfeited_bond": 4,
                            "agent_licence_no": "OPN014254728",
                            "agency_licence_no": "ZASO252585",
                            "forfeited_percent": 1.73
                        },
                        {
                            "agent_name": "Yoest Shane",
                            "forfeited_in": "100,000",
                            "agency_name": "Pacific Life",
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

                }                
            }
        };
       
        return obj;    
    }
    //.................................................



    //.................................................
    public getLoginResponseSurety() {

        const obj = {  

	        "data": {

                "id": 4,

                "auth_token": "f04715467f41f642ecadf74f9846eb4e82d05bad",

                "user_role": "group1",

                "username": "surety",
                "email": "surety@validify.com",

                "first_name": "Surety",
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

                    "bond_increase_requests": {
                        "amount": null,
                        "bonds": 3
                    },

                    "unpaid_judgements": {
                        "amount": "2.3K",
                        "bonds": "200"
                    },

                    "inventory_remaining": {
                        "amount": "12,540,500",
                        "bonds": null
                    },

                    "top_agents": [
                        {
                            "agent_name": "Dwayne Smith",
                            "forfeited_in": "325,000",
                            "agency_name": "Hardford Bail Bonds",
                            "no_of_forfeited_bond": 2,
                            "agent_licence_no": "FELO2584659",
                            "agency_licence_no": "FBAO25234",
                            "forfeited_percent": 3.46
                        },
                        {
                            "agent_name": "Andrew Smalltown",
                            "forfeited_in": "300,000",
                            "agency_name": "Hudson River Bail Bonds",
                            "no_of_forfeited_bond": 2,
                            "agent_licence_no": "XAQ09863548",
                            "agency_licence_no": "TAZO586858",
                            "forfeited_percent": 3.14
                        },
                        {
                            "agent_name": "Pablo Goldsmith",
                            "forfeited_in": "200,000",
                            "agency_name": "Fordelity Bail Bonds",
                            "no_of_forfeited_bond": 5,
                            "agent_licence_no": "ADX0856974",
                            "agency_licence_no": "XAZ895334",
                            "forfeited_percent": 2.16
                        },
                        {
                            "agent_name": "Xavier Montgomery",
                            "forfeited_in": "160,000",
                            "agency_name": "Lexington City Bail Bonds",
                            "no_of_forfeited_bond": 4,
                            "agent_licence_no": "OPN014254728",
                            "agency_licence_no": "ZASO252585",
                            "forfeited_percent": 1.73
                        },
                        {
                            "agent_name": "Yoest Shane",
                            "forfeited_in": "100,000",
                            "agency_name": "Pacific Life",
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

                }                
            }
        };
       
        return obj;    
    }
    //.................................................


    //.................................................
    public getForgotResponse() {
        const obj = {  
	        "status_code": 200,
	        "data": {
                "status": "Forgot password action completed!",                
	        }
        };                
        return obj;    
    }
    //.................................................


    //.................................................
    public getLogoutResponse() {
        const obj = {  
	        "status_code": 200,
	        "data": {
                "status": "Logout Success!",                
	        }
        };                
        return obj;    
    }
    //.................................................


    //.................................................
    public getBondSearchResponse() {

        const obj = {  

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
        };   
              
        return obj;    
    }
    //.................................................
     

}




/*
//getBondSearchResponse();
//getLoginResponseDOI();
//getLoginResponseSurety();

http://192.168.1.90:8000/api/v1/account/login/

{"email": "doi@validify.com", "password": "doi"}

http://192.168.1.90:8000/api/v1/search/

*/