
import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { AuthService } from "app/auth/auth.service";
import { HeaderService } from "app/layout/header/header.service";
import { SidebarService } from "app/layout/sidebar/sidebar.service";

import { Message } from "primeng/components/common/message";
import { ConfirmationService} from 'primeng/primeng';

declare var $:any;

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  providers: [ConfirmationService],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{  

    @ViewChild('cdRef') confirmationDialogRef;

    public isLoggedIn:boolean = false;
    public isLoading:boolean = false; 
    public msgs: Message[] = [];   
   
    constructor(private authService:AuthService, private headerService:HeaderService, private sidebarService:SidebarService, private confirmationService: ConfirmationService) {
      
      authService.isLoggedInSubject().subscribe((bool) => {  
        this.isLoggedIn = bool;
      });
      
      headerService.toggleSidebar.subscribe((sidebarStatus) => {
        if (sidebarStatus) {
          $('#wrapper').removeClass('toggled');
        } else {
          $('#wrapper').addClass('toggled');
        }
        this.sidebarService.sidebarStatus.emit(!sidebarStatus);
      });
     
    }

    ngAfterViewInit() {
      /*this.confirmationDialogRef.el.nativeElement
      .querySelector('.ui-confirmdialog')
      .classList.add('logout-confirm');*/
    }

    /*
    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }
    */
}

