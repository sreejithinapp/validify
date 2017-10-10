import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { HttpObject } from "./http.object";
import { Constants } from "../constants";



@Injectable()
export class HttpService {
  
  public api_url: string;
  //............................................................


  //............................................................
  constructor(private http:Http, private router:Router) {
    this.api_url = Constants.api_url;
  }
  //............................................................


  //............................................................
  httpDelete(url: string, data?: any) {   
    return this.http
      .delete(this.api_url + url, {headers: this.getHeaders(), body: data})
      .map((data: Response) => this.httpComplete(data))
      .catch(error => this.handleError(error));
  }
  //............................................................


  //............................................................
  httpGet(url:string, options?:HttpObject) {    
    return this.http
      .get(this.api_url + url, {headers: this.getHeaders(), search: options ? options.data : null})
      .map((data: Response) => this.httpComplete(data))
      .catch(error => this.handleError(error));
  }
  //............................................................


  //............................................................
  httpPost(url:string, data:Object, options?: HttpObject, customHeaderObj?: any) {   
    return this.http
      .post(this.api_url + url, data, {headers: this.getCustomHeaders(customHeaderObj), search: options ? options.data : null})
      .map((data: Response) => this.httpComplete(data))
      .catch(error => this.handleError(error));    
  }  
  //............................................................


  //............................................................
  private getHeaders(){
    let headers = new Headers();
    let access_token = window.localStorage.getItem('access_token');
    if (access_token) {
      headers.append('Authorization', 'Bearer ' + access_token);
      headers.append('Accept', 'application/json');
    }
    return headers;
  }
  private getCustomHeaders(customHeaderObj?: any){
    let headers = new Headers();
    let access_token = window.localStorage.getItem('access_token');
    if (access_token) {
      headers.append('Authorization', 'Bearer ' + access_token);    
    }   
    if (customHeaderObj) {
      this.customHeadersMap(customHeaderObj, headers);
    } else {
      headers.append('Content-Type', 'application/json');
    } 
    return headers;
  }
  customHeadersMap(customHeaderObj, headers) {
    for (let key in customHeaderObj) {
      if (customHeaderObj.hasOwnProperty(key)) {
        headers.append(key, customHeaderObj[key]);
      }
    }
  }
  //............................................................

  
  //............................................................
  private handleError(error: any) {     
    return Observable.throw(error);       
  }  
  private httpComplete(data) {   
    return data.json()
  }
  //............................................................

}


/*
//............................................................
httpPatch(url: string, data: Object) {
  return this.http
    .patch(this.api_url + url, data, {headers: this.getHeaders()})
    .map((data: Response) => this.httpComplete(data))
    .catch(error => this.handleError(error));
}
httpPut(url: string, data: Object) {
  return this.http
    .put(this.api_url + url, data, {headers: this.getHeaders()})
    .map((data: Response) => this.httpComplete(data))
    .catch(error => this.handleError(error));
}
private handleError(error: any) {  
  if (error.status === 401 || error.status === 0) {
    localStorage.clear();
    if (this.router.url != "/login") {
      location.reload();
    }
    return Observable.throw(error.json());
  }
  return Observable.throw(error.json());     
}
*/