
import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { Message } from "primeng/components/common/message";
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/primeng';

import { AuthService } from "./auth/auth.service";
import { SharedService } from "./shared/shared.service";

declare var $:any;

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  providers: [ConfirmationService, MessageService],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{  

    @ViewChild('cdRef') confirmationDialogRef;
   
    public isUserLogined:boolean = false;
    public isWhichRole:string;  
    public isDoi:boolean = false;
    public isSurety:boolean = false;
    //public isContentLoading:boolean = false;   
    public dialogDisplay: boolean = false;   
    //.......................................................................


    //.......................................................................
    constructor(private authService:AuthService, private sharedService:SharedService, private confirmationService:ConfirmationService, private messageService: MessageService) {
      
      authService.isLoggedInCheckUsingBS().subscribe((bool) => {          
        this.isUserLogined = bool;
        //console.log('AppComponent isLoggedInCheckUsingBS>> this.isUserLogined:', this.isUserLogined);
      });

      authService.isWhichRoleCheckUsingBS().subscribe((roleID) => {  
        this.isWhichRole = roleID;
        this.isSurety = false;
        this.isDoi = false;
        //group2 - doi | group1 - surety
        //console.log('AppComponent isWhichRoleCheckUsingBS>> this.isWhichRole:', this.isWhichRole);       
        if (this.isWhichRole === "group1" || this.isWhichRole === "group2"){
          this.loginSuccessMessage();
          if (this.isWhichRole === 'group1'){
            this.isSurety = true;
          } else if (this.isWhichRole === 'group2'){
            this.isDoi = true;         
          }
        } else {
          this.loginFailMessage();
        }                
      });

      sharedService.isDialogOverlayCheckUsingBS().subscribe((bool) => {          
        this.dialogDisplay = bool;   
        console.log('AppComponent isDialogOverlayCheckUsingBS>> this.dialogDisplay:', this.dialogDisplay); 
      });     
      
    }
    //.......................................................................



    //.......................................................................
    ngAfterViewInit() {
      //this.confirmationDialogRef.el.nativeElement.querySelector('.ui-confirmdialog').classList.add('logout-confirm'); 
    }
    //.......................................................................

    
    //.......................................................................
    loginSuccessMessage() {
        var obj = this.sharedService.getCurrentMsg();
        if (obj){
          this.messageService.add({severity: obj.severity, summary:obj.summary, detail:obj.detail});
        }        
        //this.messageService.clear();//clear message
    }

    loginFailMessage() {
        var obj = this.sharedService.getCurrentMsg();
        //console.log('loginFailMessage', obj)
        if (obj){
          this.messageService.add({severity: obj.severity, summary:obj.summary, detail:obj.detail});
        }      
    }    
    //.......................................................................


    //.......................................................................
    confirm1(obj1) {
      let obj = this.sharedService.getConfirmDetails(); //dummy  
      this.confirmationService.confirm({
          message: obj.message,
          header: obj.header,
          icon:  obj.icon,
          accept: () => {
              this.messageService.add({severity: obj.accept_severity, summary: obj.accept_summary, detail: obj.accept_detail});              
          },
          reject: () => {
              this.messageService.add({severity: obj.reject_severity, summary: obj.reject_summary, detail: obj.reject_detail});             
          }
      });
    }
    //.......................................................................

    
}



/*
      //private headerService:HeaderService, private sidebarService:SidebarService,
      headerService.toggleSidebar.subscribe((sidebarStatus) => {
        if (sidebarStatus) {
          $('#wrapper').removeClass('toggled');
        } else {
          $('#wrapper').addClass('toggled');
        }
        this.sidebarService.sidebarStatus.emit(!sidebarStatus);
      });
      */     