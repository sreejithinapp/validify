/*
import {Injectable, EventEmitter} from '@angular/core';

import {HttpService} from "app/utils/http-service/http.service";
import {Constants} from 'app/layout/sidebar/sidebar.constant';

import {Subject} from "rxjs/Subject";

@Injectable()
export class SidebarService {
    
    public api_url: string;
    public sidebarStatus: EventEmitter<any> = new EventEmitter();

    constructor(private httpServiceRef: HttpService) {
        this.api_url = this.httpServiceRef.api_url;
    }
}
*/


/*
@Injectable()
export class SidebarService {
 public api_url: string;
 public sidebarStatus: EventEmitter<any> = new EventEmitter();
 private customerDraft$ = new Subject();
 private workOrderDraft$ = new Subject();

 constructor(private httpServiceRef: HttpService) {
  this.api_url = this.httpServiceRef.api_url;
 }

 customerDraftObservable() {
  return this.customerDraft$.asObservable();
 }

 customerDraftUpdateCount(bool: boolean) {
  this.customerDraft$.next(bool);
 }

 getCustomerDraftList() {
  return this.httpServiceRef.httpGet(Constants.getCustomerDraftList);
 }

 getCustomerDraftCount() {
  return this.httpServiceRef.httpGet(Constants.getCustomerDraftCount);
 }

 deleteCustomerDraft(draftId) {
  return this.httpServiceRef.httpDelete(Constants.deleteCustomerDraft(draftId));
 }

 workOrderDraftObservable() {
  return this.workOrderDraft$.asObservable();
 }

 workOrderDraftUpdateCount(bool: boolean) {
  this.workOrderDraft$.next(bool);
 }

 getWorkOrderDraftList() {
  return this.httpServiceRef.httpGet(Constants.getWorkOrderDraftList);
 }

 getWorkOrderDraftCount() {
  return this.httpServiceRef.httpGet(Constants.getWorkOrderDraftCount);
 }

 deleteWorkOrderDraft(draftId) {
  return this.httpServiceRef.httpDelete(Constants.deleteWorkOrderDraft(draftId));
 }
}
*/
