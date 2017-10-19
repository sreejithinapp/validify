import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpService } from "../../shared/http-service/http.service";
import { StorageService } from "../../shared/storage.service";
import { Constants } from "../../shared/constants";


@Injectable()
export class DashboardService {  
      

    constructor(private storage:StorageService, private httpService:HttpService) {
        //constructor
    }
    //.................................................


    /*
    //API Service.....................................     
    postAction(searchTxt:string) {      
        return this.httpService.httpPost(Constants.apimethod, {search: searchTxt});
    }   
    //..................................................


    //...............................................
    //BOND SERACH 
    private behaviorSubjectBondSearch;
    private isBondSearchResponseFound:boolean = false;
    behaviorSubjectBondSearchInit() {  
        this.behaviorSubjectBondSearch = new BehaviorSubject(this.getBondSearch());
        return this.behaviorSubjectBondSearch.asObservable();
    }      
    setBehaviorSubjectBondSearch(bool:boolean) {
        this.isBondSearchResponseFound = bool;
        this.behaviorSubjectBondSearch.next(bool);
    }  
    getBondSearch() {   
        return this.isBondSearchResponseFound;
    } 
    */
    //...............................................

}



