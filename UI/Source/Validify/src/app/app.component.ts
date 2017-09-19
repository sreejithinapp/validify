
import { Component, AfterViewInit, ViewChild } from '@angular/core';

/*
import {AuthService} from "app/auth/auth.service";
import {HeaderService} from "app/layout/header/header.service";
import {SidebarService} from "app/layout/sidebar/sidebar.service";
import {Message} from "primeng/components/common/message";
*/

declare var $;

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Validify';
}


/*


export class AppComponent implements AfterViewInit {
 @ViewChild('cdRef') confirmationDialogRef;

 public title: string = 'Environ Main Component';
 public isLoggedIn: boolean = false;
 public loading: any;
 public msgs: Message[] = [];

 constructor(private authService: AuthService,
             private headerService: HeaderService,
             private sidebarService: SidebarService) {

  //SideNavBar & Header View [Behaviour Subject]
  authService.isLoggedInSubject()
   .subscribe((bool) => {
    this.isLoggedIn = bool;
   });

  headerService.toggleSidebar
   .subscribe((sidebarStatus) => {
    if (sidebarStatus) {
     $('#wrapper').removeClass('toggled');
    }
    else {
     $('#wrapper').addClass('toggled');
    }
    this.sidebarService.sidebarStatus.emit(!sidebarStatus);
   });
 }

 ngAfterViewInit() {
  this.confirmationDialogRef.el
   .nativeElement
   .querySelector('.ui-confirmdialog')
   .classList.add('logout-confirm');
 }
}

*/
