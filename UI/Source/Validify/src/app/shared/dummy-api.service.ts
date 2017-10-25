
import {Injectable} from '@angular/core';


@Injectable()
export class DummyAPIService {  
   
    constructor() { }
    //.................................................


    //.................................................
    public getLoginResponseDOI(boo:boolean) {

        let obj;

        if (boo) { //Success

            obj = {  
                "status_code": 200,
                "status_text": "Success!",
                "data": {
                    "id": 4,
                    "auth_token": "f04715467f41f642ecadf74f9846eb4e82d05bad",
                    "user_role": "group2",
                    "username": "doi",
                    "email": "doi@validify.com",
                    "first_name": "DOI California",
                    "last_name": "John Smith",
                    "is_active": true,
                    "date_joined": "2017-09-25T10:42:30Z",
                    "dashboard": {                        
                        "suspensions": {},
                        "liabilities": {
                            "amount": "5.2B",
                            "bonds": "40,000"
                        },
                        "forfeitures": {
                            "amount": "1.2M",
                            "bonds": "250"
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

        } else { //Fail

            obj = {  
                "status_code": 0,
                "status_text": "Failed!",
                "data": {
                    "status": "Login Failed!",                
                }
            };  
        }
       
        return obj;    
    }
    //.................................................



    //.................................................
    public getLoginResponseSurety(boo:boolean) {

        let obj;

        if (boo) { //Success

            obj = {
                "status_code": 200,
                "status_text": "Success!",  
                "data": {
                    "id": 4,
                    "auth_token": "f04715467f41f642ecadf74f9846eb4e82d05bad",
                    "user_role": "group1",
                    "username": "surety",
                    "email": "surety@validify.com",
                    "first_name": "CBB SURETY COMPANY",
                    "last_name": "John Smith",
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
                                "agency_name": "Hardford Bail Bonds...",
                                "agency_licence_no": "FBAO25234",                            
                                "agent_name": "Dwayne Smith",
                                "agent_licence_no": "FELO2584659",
                                "no_of_forfeited_bond": 2,
                                "forfeited_in": "325,000",                           
                                "forfeited_percent": 3.46
                            },
                            {                            
                                "agency_name": "Hudson River Bail Bonds...",
                                "agency_licence_no": "TAZO586858",
                                "agent_name": "Andrew Smalltown",
                                "agent_licence_no": "XAQ09863548",
                                "no_of_forfeited_bond": 2,
                                "forfeited_in": "300,000",
                                "forfeited_percent": 3.14
                            },
                            {                                                        
                                "agency_name": "Fordelity Bail Bonds...",
                                "agency_licence_no": "XAZ895334",
                                "agent_name": "Pablo Goldsmith",
                                "agent_licence_no": "ADX0856974",
                                "no_of_forfeited_bond": 5,
                                "forfeited_in": "200,000",
                                "forfeited_percent": 2.16
                            },
                            {                                                        
                                "agency_name": "Lexington City Bail Bonds...",
                                "agency_licence_no": "ZASO252585",
                                "agent_name": "Xavier Montgomery",
                                "agent_licence_no": "OPN014254728",
                                "no_of_forfeited_bond": 4,
                                "forfeited_in": "160,000",                            
                                "forfeited_percent": 1.73
                            },
                            {     
                                "agency_name": "Pacific Life...",
                                "agency_licence_no": "PASO363636",
                                "agent_name": "Yoest Shane",
                                "agent_licence_no": "YSN014254728",
                                "no_of_forfeited_bond": 2,
                                "forfeited_in": "100,000",
                                "forfeited_percent": 1.13
                            }
                        ],

                        "top_agencies": [
                            {                            
                                "name": "Ami First Bail Bonds..",
                                "licence_no": "FELO2584659",
                                "inventory_remaining": "350,000",                            
                                "no_of_forfeited_bond": 4,
                                "forfeited_in": "600,000",
                                "forfeited_percent": 6.22                            
                            },
                            {                            
                                "name": "Capitol Bail Bond..",
                                "licence_no": "FELO2584659",
                                "inventory_remaining": "600,000",
                                "no_of_forfeited_bond": 4, 
                                "forfeited_in": "550,000",                           
                                "forfeited_percent": 5.85                            
                            },
                            {                            
                                "name": "Great South Bail Bonding..",
                                "licence_no": "FELO2584659",
                                "inventory_remaining": "450,000",
                                "no_of_forfeited_bond": 3,
                                "forfeited_in": "375,000",
                                "forfeited_percent": 3.93                            
                            },
                            {                            
                                "name": "Mint Valley Bail Bonds..",
                                "licence_no": "FELO2584659",
                                "inventory_remaining": "750,000",
                                "no_of_forfeited_bond": 3,
                                "forfeited_in": "285,000",
                                "forfeited_percent": 3.08                            
                            },
                            {                            
                                "name": "Symetra..",
                                "licence_no": "SYLO2584659",
                                "inventory_remaining": "500,000",                            
                                "no_of_forfeited_bond": 2,
                                "forfeited_in": "105,000",
                                "forfeited_percent": 0.28                            
                            }
                        ]

                    }                
                }
            };

        } else { //Fail

            obj = {  
                "status_code": 0,
                "status_text": "Failed!",
                "data": {
                    "status": "Login Failed!",                
                }
            }; 
        }       
       
        return obj;    
    }
    //.................................................


    //.................................................
    public getForgotResponse(boo:boolean) {
        
        let obj;

        if (boo) { //Success

            obj = {  
                "status_code": 200,
                "status_text": "Success!",
                "data": {
                    "status": "Forgot password action success!",                
                }
            };  
            
        } else { //Fail

            obj = {  
                "status_code": 0,
                "status_text": "Failed!",
                "data": {
                    "status": "Forgot password action failed!",                
                }
            };  
        }
                   
        return obj;         
    }
    //.................................................



    //.................................................
    public getLogoutResponse(boo:boolean) {
        
        let obj;

        if (boo) { //Success

            obj = {  
                "status_code": 200,
                "status_text": "Success!",
                "data": {
                    "status": "Logout Success!",                
                }
            };  
            
        } else { //Fail

            obj = {  
                "status_code": 0,
                "status_text": "Failed!",
                "data": {
                    "status": "Logout Failed!",                
                }
            };  
        }
                   
        return obj;      
    }
    //.................................................


    //.................................................
    public getBondSearchResponse(boo:boolean) {

        let obj;

        if (boo) { //Success

            obj = { 
                "status_code": 200,
                "status_text": "Success!",
                "data": {
                    "defendant_name": "John Smith",
                    "court_city": "San Jose",
                    "court_address": "191 N 1st St",
                    "next_court_date": "08/03/2017",
                    "court_time": "8:30AM–5PM",
                    "charge": "5000",
                    "bond_amount": 3000,
                    "court_state": "CA",
                    "court_type": "Superior",
                    "court_date_history": [
                        {
                            "date": "08/03/2017",
                            "availability": "Y"
                        },
                        {
                            "date": "08/07/2017",
                            "availability": "N"
                        }                   
                    ]               
                }
            }; 

        } else { //Fail

            obj = {  
                "status_code": 0,
                "status_text": "Failed!",
                "data": {
                    "status": "Bond Search Failed!",                
                }
            };  
        }
              
        return obj;    
    }
    //.................................................


    //.................................................
    public getDashboardAgencyDetailsResponse(boo:boolean) {

        let obj;
        
        if (boo) { //Success

            obj = { 
                "status_code": 200, 
                "status_text": "Success!",
                "data": {  
                    "AgencyDetails": {
                        "IsActive": true,
                        "IsDoiActivated": true,
                        "IsActivated": true,
                        "IsBondAgency": false,                    
                        "AgencyLicenseNum": "FELO2584659",
                        "AgencyName": "Fordelity Bail Bonds",
                        "AgencyPhoneNo": "1234567890",
                        "Address": "23 6th St.",
                        "City": "Coyote",
                        "State": "California",
                        "County": "Santa Clara",
                        "ZipCode": "32904",
                        "AgencyEmail": "acme@abc.com"
                    },
                    "AgencySuspensionHistory": [
                        {
                            "Date": "02/14/2017",
                            "StatesSuspended": "California",
                            "CountiesSuspended": "Santa Clara"
                        },
                        {
                            "Date": "04/23/2017",
                            "StatesSuspended": "Georgia",
                            "CountiesSuspended": "Webster"
                        },
                        {
                            "Date": "05/16/2017",
                            "StatesSuspended": "New York",
                            "CountiesSuspended": "Dutchess"
                        }                    
                    ]                             
                }
            };        

        } else { //Fail

            obj = {  
                "status_code": 0,
                "status_text": "Failed!",
                "data": {
                    "status": "Get Agency Details Failed!",                
                }
            };
        }  

        return obj;    
    } 

    public saveDashboardAgencyDetailsResponse(boo:boolean) {
        
        let obj;

        if (boo) { //Success

            obj = {  
                "status_code": 200,
                "status_text": "Success!",
                "data": {
                    "status": "Save Agency Details Success!",                
                }
            };  

        } else { //Fail

            obj = {  
                "status_code": 0,
                "status_text": "Failed!",
                "data": {
                    "status": "Save Agency Details Failed!",                
                }
            };  
        }
                   
        return obj;      
    }     
    //.................................................


    //.................................................
    public getDashboardAgentDetailsResponse(boo:boolean) {

        let obj;

        if (boo){ //Success

            obj = {  
                "status_code": 200,
                "status_text": "Success!",
                "data": {  
                    "AgentDetails": {
                        "IsActive": false,
                        "IsDoiActivated": false,
                        "IsActivated": false,
                        "IsBondAgent": true,                    
                        "AgencyLicenseNum": "FELO2584659",
                        "AgentFirstName": "Roger",
                        "AgentLastName": "Montana",
                        "AgentPhoneNo": "1234567890",                
                        "AgentEmail": "john@abc.com"
                    },                
                    "AgentSuspensionHistory": [
                        {
                            "State": "California",
                            "Date": "02/14/2017",
                            "Action": "Surety Suspension",
                            "County": "Alameda",
                            "Reason": "Liability Controls"
                        },
                        {
                            "State": "California",
                            "Date": "04/23/2017",
                            "Action": "DOI Suspension",
                            "County": "Alpine",
                            "Reason": "Rules Violation"
                        },
                        {
                            "State": "California",
                            "Date": "05/18/2017",
                            "Action": "Surety Suspension",
                            "County": "Alpine",
                            "Reason": "DOI Action"
                        },                   
                    ]                             
                }
            };

        } else { //Fail

            obj = {  
                "status_code": 0,
                "status_text": "Failed!",
                "data": {
                    "status": "Get Agent Details Failed!",                
                }
            };  
        }
               
        return obj;    
    }  

    public saveDashboardAgentDetailsResponse(boo:boolean) {
        
        let obj;

        if (boo) { //Success

            obj = {  
                "status_code": 200,
                "status_text": "Success!",
                "data": {
                    "status": "Save Agent Details Success!",                
                }
            };  

        } else { //Fail

            obj = {  
                "status_code": 0,
                "status_text": "Failed!",
                "data": {
                    "status": "Save Agent Details Failed!",                
                }
            };  
        }
                   
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