

import {Injectable, EventEmitter} from '@angular/core';

import {HttpService} from 'app/utils/http-service/http.service';
import {Constants} from "app/layout/header/header.constant";

@Injectable()
export class HeaderService {
    
 public toggleSidebar: EventEmitter<any> = new EventEmitter();
 public api_url: string;

 constructor(private httpServiceRef: HttpService) {
  this.api_url = this.httpServiceRef.api_url;
 }

 getDraftCount() {
  return this.httpServiceRef.httpGet(Constants.getDraftCount);
 }

 deleteAllDrafts() {
  return this.httpServiceRef.httpDelete(Constants.deleteAllDrafts);
 }
}
