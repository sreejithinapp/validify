
import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { AuthService } from "../../auth/auth.service";
import { SharedService } from "../../shared/shared.service";
import { StorageService } from "../../shared/storage.service";
import { DummyAPIService } from "../../shared/dummy-api.service";

//import {HeaderService} from "./header.service";
//import {SidebarService} from "../sidebar/sidebar.service";


@Component({
 selector: 'vfy-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {  

    private subscriptionLogout:Subscription; 
    //private sidebarStatus = false;

    constructor(private router:Router, private authService:AuthService, private sharedService:SharedService, private storageService:StorageService, private dummyAPIService:DummyAPIService){      
      /*this.sidebarService.sidebarStatus.subscribe((sidebarStatusb) => {
        this.sidebarStatus = sidebarStatusb;
      });*/
    }

    ngOnInit() {
        //ngOnInit      
    } 

    ngOnDestroy() {        
        //ngOnDestroy
        if (this.subscriptionLogout) this.subscriptionLogout.unsubscribe(); 
    }
    //.......................................


    //................................................................... 
    public logoutBtnAction() {      
        this.subscriptionLogout = this.authService.logout().subscribe((response) => {
            //this.logoutSuccess(response); //Depolyment
            this.dummyLogoutResponse(); //DUMMY Test

        }, (error) => {            
            //this.logoutFail(error); //Depolyment               
            this.dummyLogoutResponse(); //DUMMY Test
        });        
    }

    private dummyLogoutResponse(){
        let response = this.dummyAPIService.getLogoutResponse();
        //console.log('dummyBondSearchResponse: ', response);
        this.logoutSuccess(response);        
    }

    private logoutSuccess(response:any){
        //console.log('logoutSuccess>> response: ', response);       
        if (response.data) {   
            this.goToLogin(); 
            //this.setSuccessInfoMessageAndBehaviourSubject({statusText: response.data.status});       
        }  
    }  

    private logoutFail(error:any){
        //console.log('logoutFail error: ', error);         
        this.goToLogin();  
        //this.setFailInfoMessageAndBehaviourSubject(error);     
    }

    private goToLogin(){
        this.storageService.remove("auth_token");
        this.storageService.remove("user_role");
        //this.storageService.set("loggedIn", "false");  
        location.replace('/');  //location.reload(true);      
    }
    //................................................................... 


}




//...................................................................
/*     
setSuccessInfoMessageAndBehaviourSubject(obj:any){
    //console.log('setSuccessInfoMessageAndBehaviourSubject obj: ', obj);           
    let msgObj = {severity: 'success', summary: 'Logout', detail: obj.statusText};            
    this.sharedService.setCurrentMsg(msgObj);  
    this.authService.setBehaviorSubjectLogout(true);  
}

setFailInfoMessageAndBehaviourSubject(obj:any){
    //console.log('setFailInfoMessageAndBehaviourSubject obj: ', obj);          
    let msgObj = {severity: 'error', summary: 'Logout', detail: obj.statusText};            
    this.sharedService.setCurrentMsg(msgObj);  
    this.authService.setBehaviorSubjectLogout(true);  
}
*/  
//...................................................................




/*
import {ConfirmationService} from "primeng/components/common/confirmationservice";
import {OverlayPanel} from "primeng/components/overlaypanel/overlaypanel";
import {Message} from "primeng/components/common/message";

@Component({
 selector: 'evn-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
 public permissions: any;
 private sidebarStatus = false;
 public user_name: any = "";
 public userImagePath: string;
 public userImageLoaded: boolean = true;
 public headerNavGrowl: Message[] = [];

 constructor(private router: Router,
             private headerService: HeaderService,
             private sidebarService: SidebarService,
             private authService: AuthService,
             private storage: StorageService,
             private confirmationService: ConfirmationService) {
  this.permissions = this.storage.getPermissions();
  this.sidebarService.sidebarStatus.subscribe((sidebarStatusb) => {
   this.sidebarStatus = sidebarStatusb;
  });
  this.getUserDetails();
 }

 logoutOnClick() {
  this.headerService.getDraftCount().subscribe((rData) => {
   if (!rData.count) {
    this.router.navigate(['/dashboard']).then(() => {
     this.logout();
    });
   } else {
    this.showConfirmation();
   }
  }, () => {
   this.headerNavGrowl = [];
   this.headerNavGrowl = [...this.headerNavGrowl, {
    severity: 'error',
    summary: 'Error',
    detail: 'Something went wrong'
   }];
  });
 }

 showConfirmation() {
  this.confirmationService.confirm({
   message: 'There are many drafts open. Do you want to clear them before logout?',
   accept: () => {
    //Clear All
    this.headerService.deleteAllDrafts().subscribe((rData) => {
     this.logout();
    });
   },
   reject: () => {
    //Logout
    this.router.navigate(['/dashboard']).then((rData) => {
     this.logout();
    });
   }
  });
 }

 logout() {
  this.authService.logout().subscribe((rData) => {
   window.localStorage.setItem("loggedIn", "false");
   window.localStorage.removeItem('access_token');
   window.localStorage.removeItem('user_details');
   window.localStorage.removeItem('permissions');
   this.router.navigate(['/login']);
  }, () => {
   this.headerNavGrowl = [];
   this.headerNavGrowl = [...this.headerNavGrowl, {
    severity: 'error',
    summary: 'Error',
    detail: 'Something went wrong'
   }];
  });
 }

 getUserDetails() {
  let userDetails = this.storage.get('user_details');
  this.user_name = userDetails.employee.display_name;
 }

 toggleSidebar() {
  this.headerService.toggleSidebar.emit(this.sidebarStatus);
 }

 changeTheme(themeNumber) {
  switch (themeNumber) {
   case 1:
    var el = document.getElementById('themestyles');
    el.setAttribute('href', "");
    break;
   case 2:
    var el = document.getElementById('themestyles');
    el.setAttribute('href', "assets/css/theme-1.css");
    break;
   case 3:
    var el = document.getElementById('themestyles');
    el.setAttribute('href', "assets/css/theme-2.css");
    break;
   case 4:
    var el = document.getElementById('themestyles');
    el.setAttribute('href', "assets/css/theme-3.css");
    break;
   case 5:
    var el = document.getElementById('themestyles');
    el.setAttribute('href', "assets/css/theme-4.css");
    break;
   case 6:
    var el = document.getElementById('themestyles');
    el.setAttribute('href', "assets/css/theme-5.css");
    break;
  }
 }

 toggleMasterDropdown(event, masterPanel: OverlayPanel) {
  masterPanel.toggle(event, event.target);
 }

 userImageInit() {
  let getLocalUserData = this.storage.get('user_details');
  let apiUrl = this.headerService.api_url;
  let tenantId = getLocalUserData.employee.tenant_id;
  let empId = getLocalUserData.employee.id;
  let getUserImageName = getLocalUserData.employee.image_path;
  this.userImagePath = `${apiUrl}Uploads/${tenantId}/employee/${empId}/${getUserImageName}`;
 }

 userImageLoadedCallback(bool) {
  this.userImageLoaded = bool;
 }

 ngOnInit() {
  this.userImageInit();
 }
}
*/