
import { Component } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {   
    constructor() { }       
}
//.......................................................................





//.......................................................................
/*
import { Component, AfterViewInit, ViewChild } from '@angular/core';
export class AppComponent implements AfterViewInit{  
declare var $:any;
ngAfterViewInit() {
  //@ViewChild('cdRef') confirmationDialogRef;
  //this.confirmationDialogRef.el.nativeElement.querySelector('.ui-confirmdialog').classList.add('logout-confirm'); 
}
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



//.......................................................................
/*
//import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/primeng';
providers: [MessageService],
//public msgs: Message[] = []; 
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
public dialogDisplay: boolean = false;   
//this.checkDialogCompShowStatus();   
checkDialogCompShowStatus(){
  this.sharedService.isDialogOverlayCheckUsingBS().subscribe((bool) => {          
    this.dialogDisplay = bool;   
    //console.log('AppComponent isDialogOverlayCheckUsingBS>> this.dialogDisplay:', this.dialogDisplay); 
  });
}
*/
//.......................................................................