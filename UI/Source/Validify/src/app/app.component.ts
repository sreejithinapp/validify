
import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { Message } from "primeng/components/common/message";
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/primeng';

import { AuthService } from "app/auth/auth.service";
import { HeaderService } from "app/layout/header/header.service";
import { SidebarService } from "app/layout/sidebar/sidebar.service";
import { SharedService } from "app/core/shared.service";


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
    //public isContentLoading:boolean = false;  
    //.......................................................................


    //.......................................................................
    constructor(private authService:AuthService, private headerService:HeaderService, private sidebarService:SidebarService, private sharedService:SharedService, private confirmationService:ConfirmationService, private messageService: MessageService) {
      //console.log('AppComponent very FIRST....');

      authService.isLoggedInCheckUsingBS().subscribe((bool) => {          
        this.isUserLogined = bool;
        console.log('AppComponent isLoggedInCheckUsingBS>> this.isUserLogined:', this.isUserLogined);
      });

      authService.isWhichRoleCheckUsingBS().subscribe((roleID) => {  
        this.isWhichRole = roleID;
        console.log('AppComponent isWhichRoleCheckUsingBS>> this.isWhichRole:', this.isWhichRole);       
        if (this.isWhichRole == "R1"){
          this.loginSuccessMessage();
        } else {
          this.loginFailMessage();
        }                
      });
      
      /*
      headerService.toggleSidebar.subscribe((sidebarStatus) => {
        if (sidebarStatus) {
          $('#wrapper').removeClass('toggled');
        } else {
          $('#wrapper').addClass('toggled');
        }
        this.sidebarService.sidebarStatus.emit(!sidebarStatus);
      });
      */     
    }
    //.......................................................................



    //.......................................................................
    ngAfterViewInit() {
      /*this.confirmationDialogRef.el.nativeElement
      .querySelector('.ui-confirmdialog')
      .classList.add('logout-confirm');*/   
    }
    //.......................................................................


    
    //.......................................................................
    loginSuccessMessage() {
        this.messageService.add({severity:'success', summary:'Login Message', detail:'Logined Successfully!'});
        //this.messageService.clear();//clear message
    }

    loginFailMessage() {
        var obj = this.sharedService.getCurrentMsg();
        console.log('loginFailMessage', obj)
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

