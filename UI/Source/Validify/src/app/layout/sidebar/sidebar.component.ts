/*
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
 selector: 'vfy-sidebar',
 templateUrl: './sidebar.component.html',
 styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  constructor(){}
}
*/

/*
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {HeaderService} from "app/layout/header/header.service";
import {SidebarService} from "app/layout/sidebar/sidebar.service";
import {Message} from "primeng/components/common/message";
import {StorageService} from "app/utils/storage.service";
import {ConfirmationService} from "primeng/components/common/confirmationservice";

@Component({
 selector: 'evn-sidebar',
 templateUrl: './sidebar.component.html',
 styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit, OnDestroy {
 public permissions: any;
 public sidebarStatus: boolean = false;
 public sidebarGrowl: Message[] = [];

 public customerDraftList: any = [];
 public customerDraftLoader: boolean = false;
 public customerDraftCount: any;

 public workOrderDraftList: any = [];
 public workOrderDraftLoader: boolean = false;
 public workOrderDraftCount: any;

 public customerDraftSubscription: any;
 public workOrderDraftSubscription: any;

 @ViewChild("customerPanel") customerPanelElemRef;
 @ViewChild("workOrderPanel") workOrderPanelElemRef;

 constructor(private routerRef: Router,
             private headerServiceRef: HeaderService,
             private sidebarServiceRef: SidebarService,
             private storage: StorageService,
             private confirmationServiceRef: ConfirmationService) {

  this.sidebarServiceRef.sidebarStatus.subscribe((sidebarStatusb) => {
   this.sidebarStatus = sidebarStatusb;
  });
  this.permissions = this.storage.getPermissions();
 }

 toggleSidebar() {
  this.headerServiceRef.toggleSidebar.emit(this.sidebarStatus);
 }

 //Customer Draft List - OverlayPanel onAfterShow
 getAllCustomerDraftList() {
  this.customerDraftLoader = true;
  this.sidebarServiceRef.getCustomerDraftList()
   .subscribe((rData) => {
    //Draft Count
    this.customerDraftCount = rData.count ? rData.count : "";
    this.customerDraftList = rData.draft;
    this.customerDraftLoader = false;
   }, () => {
    this.showErrorGrowl();
    this.customerDraftLoader = false;
   });
 }

 //Customer Draft Count
 getAllCustomerDraftCount() {
  this.sidebarServiceRef.getCustomerDraftCount()
   .subscribe((rData) => {
    //Draft Count
    this.customerDraftCount = rData.count ? rData.count : "";

    //No draft [Hiding Overlay Panel]
    if (!rData.count) {
     this.customerPanelElemRef.hide();
    }
   }, () => {
    this.customerDraftCount = "";
    this.showErrorGrowl();
   });
 }

 showDraftDeleteConfirmation(draftId, moduleName) {
  this.confirmationServiceRef.confirm({
   message: `Do you want to delete this draft (#${draftId})?`,
   accept: () => {
    switch (moduleName) {
     case "customer":
      this.customerDraftDelete(draftId);
      break;
     case "workorder":
      this.workOrderDraftDelete(draftId);
      break;
    }
   }
  });
 }

 isDraftDeleteAllowed(fnArgs) {
  //Selected Draft Id != URL Path Draft Id
  if (fnArgs.draftId != fnArgs.urlPathDraftId) {
   this.showDraftDeleteConfirmation(fnArgs.draftId, fnArgs.moduleName);
  } else {
   this.showGrowlMsg({
    severity: 'error',
    summary: 'Error',
    detail: `Draft (#${fnArgs.draftId}) cannot be deleted. It is being used.`
   });
  }
 }

 //Draft List On Delete
 draftOnDelete(draftId, moduleName) {
  let urlPath, urlPathToArr, urlPathDraftIndex, urlPathDraftId, fnArgs = {};
  urlPath = this.routerRef.url;
  urlPathToArr = urlPath.split('/');
  urlPathDraftIndex = urlPathToArr.indexOf('draft');
  if (urlPathDraftIndex !== -1) {
   //Has Draft Path
   urlPathDraftId = urlPathToArr[urlPathDraftIndex + 1];
   fnArgs['draftId'] = draftId;
   fnArgs['urlPathDraftId'] = urlPathDraftId;
   fnArgs['moduleName'] = moduleName;
   this.isDraftDeleteAllowed(fnArgs);
  } else {
   //Has No Draft Path
   this.showDraftDeleteConfirmation(draftId, moduleName);
  }
 }

 //Customer Draft On Delete
 customerDraftDelete(draftId) {
  this.sidebarServiceRef.deleteCustomerDraft(draftId).subscribe((rData) => {
   if (rData.draft) {
    this.showGrowlMsg({
     severity: 'success',
     summary: 'Success',
     detail: `Draft #${draftId} deleted successfully`
    });
    //Reload Customer Draft Lists
    this.getAllCustomerDraftList();
    //Reload Customer Draft Count
    this.getAllCustomerDraftCount()
   } else {
    this.showErrorGrowl();
   }
  }, () => {
   this.showErrorGrowl();
  });
 }

 //Customer Draft Subject Observable Subscription
 customerDraftCountSubscription() {
  this.customerDraftSubscription = this.sidebarServiceRef
   .customerDraftObservable().subscribe((rData) => {
    if (rData) {
     this.getAllCustomerDraftCount();
    }
   });
 }

 //WorkOrder Draft List - OverlayPanel onAfterShow
 getAllWorkOrderDraftList() {
  this.workOrderDraftLoader = true;
  this.sidebarServiceRef.getWorkOrderDraftList()
   .subscribe((rData) => {
    //Draft Count
    this.workOrderDraftCount = rData.count ? rData.count : "";
    this.workOrderDraftList = rData.draft;
    this.workOrderDraftLoader = false;
   }, () => {
    this.showErrorGrowl();
    this.workOrderDraftLoader = false;
   });
 }

 //WorkOrder Draft Count
 getAllWorkOrderDraftCount() {
  this.sidebarServiceRef.getWorkOrderDraftCount()
   .subscribe((rData) => {
    //Draft Count
    this.workOrderDraftCount = rData.count ? rData.count : "";
    //No draft [Hiding Overlay Panel]
    if (!rData.count) {
     this.workOrderPanelElemRef.hide();
    }
   }, () => {
    this.workOrderDraftCount = "";
    this.showErrorGrowl();
   });
 }

 //WorkOrder Draft On Delete
 workOrderDraftDelete(draftId) {
  this.sidebarServiceRef.deleteWorkOrderDraft(draftId).subscribe((rData) => {
   if (rData.draft) {
    this.showGrowlMsg({
     severity: 'success',
     summary: 'Success',
     detail: `Draft #${draftId} deleted successfullya`
    });
    //Reload Customer Draft Lists
    this.getAllWorkOrderDraftList();
    //Reload Customer Draft Count
    this.getAllWorkOrderDraftCount()
   } else {
    this.showErrorGrowl();
   }
  }, () => {
   this.showErrorGrowl();
  });
 }

 //WorkOrder Draft Subject Observable Subscription
 workOrderDraftCountSubscription() {
  this.workOrderDraftSubscription = this.sidebarServiceRef
   .workOrderDraftObservable().subscribe((rData) => {
    if (rData) {
     this.getAllWorkOrderDraftCount();
    }
   });
 }

 //Growl Error
 showErrorGrowl() {
  this.sidebarGrowl = [];
  this.sidebarGrowl = [...this.sidebarGrowl, {
   severity: 'error',
   summary: 'Error',
   detail: 'Something went wrong'
  }];
 }

 //Growl Custom Msg
 showGrowlMsg(growlObj) {
  this.sidebarGrowl = [];
  this.sidebarGrowl = [...this.sidebarGrowl, {
   severity: growlObj.severity,
   summary: growlObj.summary,
   detail: growlObj.detail
  }];
 }

 ngOnInit() {
  //Customer
  this.getAllCustomerDraftCount();
  this.customerDraftCountSubscription();
  //WorkOrder
  this.getAllWorkOrderDraftCount();
  this.workOrderDraftCountSubscription();
 }

 ngOnDestroy() {
  //Customer Draft Count Remove Subscription
  this.customerDraftSubscription.unsubscribe();
  //WorkOrder Draft Count Remove Subscription
  this.workOrderDraftSubscription.unsubscribe();
 }
}
*/