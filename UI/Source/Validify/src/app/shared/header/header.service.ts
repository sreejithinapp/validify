import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpService } from "../http-service/http.service";
import { SharedService } from "../shared.service";
import { StorageService } from "../storage.service";
import { Constants } from "../constants";

@Injectable()
export class HeaderService {  
    
      
    constructor(private sharedService:SharedService, private storageService:StorageService, private httpService:HttpService) {
        //constructor
    }
    //.................................................

     
    //...............................................  
    //Search API
    search(searchTxt:string) {      
        return this.httpService.httpPost(Constants.search, {search: searchTxt});
    }
    //...............................................

}
