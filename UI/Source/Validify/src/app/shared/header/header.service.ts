import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SharedService } from "../shared.service";
import { StorageService } from "../storage.service";


@Injectable()
export class HeaderService {
  
    private behaviorSubjectHeader;    
    
    constructor(private sharedService:SharedService, private storageService:StorageService) {
        //constructor
    }
    //.................................................

 
    //...............................................  
    //Header 
    behaviorSubjectHeaderInit() {  
        this.behaviorSubjectHeader = new BehaviorSubject(this.getHeaderObj());
        return this.behaviorSubjectHeader.asObservable();
    }       
    setBehaviorSubjectHeader(obj:any) {
        this.behaviorSubjectHeader.next(obj);
    }     
    getHeaderObj() { 
        return this.storageService.get('header');   
    }
    //...............................................

}
