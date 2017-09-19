import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Router} from "@angular/router";

import {HttpObject} from "app/utils/http-service/http.object";
import {Constants} from "app/core/constants";

import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class HttpService {
 public api_url: string;

 constructor(private http: Http,
             private router: Router) {
  this.api_url = Constants.api_url;
 }

 //GET Method
 httpGet(url: string, options?: HttpObject) {
  let headers = new Headers();
  let access_token = window.localStorage.getItem('access_token');
  if (access_token) {
   headers.append('Authorization', 'Bearer ' + access_token);
   headers.append('Accept', 'application/json');
  }
  return this.http
   .get(this.api_url + url, {headers: headers, search: options ? options.data : null})
   .map((data: Response) => this.httpComplete(data))
   .catch(error => this.handleError(error));
 }

 //POST Method
 httpPost(url: string, data: Object, options?: HttpObject, customHeaderObj?: any) {
  let headerInstance = new Headers();
  let access_token = window.localStorage.getItem('access_token');
  headerInstance.append('Authorization', 'Bearer ' + access_token);
  //Dynamic Header Metadata
  if (customHeaderObj) {
   this.customHeadersMap(customHeaderObj, headerInstance);
  } else {
   headerInstance.append('Content-Type', 'application/json');
  }
  return this.http
   .post(this.api_url + url, data, {headers: headerInstance, search: options ? options.data : null})
   .map((data: Response) => this.httpComplete(data))
   .catch(error => this.handleError(error));
 }

 //PATCH Method
 httpPatch(url: string, data: Object) {
  let headers = new Headers();
  let access_token = window.localStorage.getItem('access_token');
  if (access_token) {
   headers.append('Authorization', 'Bearer ' + access_token);
   headers.append('Content-Type', 'application/json');
  }
  return this.http
   .patch(this.api_url + url, data, {headers: headers})
   .map((data: Response) => this.httpComplete(data))
   .catch(error => this.handleError(error));
 }

 //PUT Method
 httpPut(url: string, data: Object) {
  let headers = new Headers();
  let access_token = window.localStorage.getItem('access_token');
  if (access_token) {
   headers.append('Authorization', 'Bearer ' + access_token);
   headers.append('Content-Type', 'application/json');
  }
  return this.http
   .put(this.api_url + url, data, {headers: headers})
   .map((data: Response) => this.httpComplete(data))
   .catch(error => this.handleError(error));
 }

 //DELETE Method
 httpDelete(url: string, data?: any) {
  let headers = new Headers();
  let access_token = window.localStorage.getItem('access_token');
  if (access_token) {
   headers.append('Authorization', 'Bearer ' + access_token);
   headers.append('Content-Type', 'application/json');
  }
  return this.http
   .delete(this.api_url + url, {headers: headers, body: data})
   .map((data: Response) => this.httpComplete(data))
   .catch(error => this.handleError(error));
 }

 private handleError(error: any) {
  //Unauthorised / Options Failed [ERR_CONNECTION_REFUSED..]
  if (error.status === 401 || error.status === 0) {
   localStorage.clear();
   if (this.router.url != "/login") {
    location.reload();
   }
   return Observable.throw(error.json());
  }
  return Observable.throw(error.json());
 }

 private httpComplete(data) {
  return data.json()
 }

 //Request Header Meta Data Map
 customHeadersMap(customHeaderObj, headerInstance) {
  for (let key in customHeaderObj) {
   if (customHeaderObj.hasOwnProperty(key)) {
    headerInstance.append(key, customHeaderObj[key]);
   }
  }
 }
}
