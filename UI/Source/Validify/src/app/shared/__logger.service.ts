
/*
import { Injectable } from '@angular/core';
import {environment} from 'environments/environment';

@Injectable()
export class LoggerService {

  shouldEnable:boolean;

  constructor() {
    if(environment.production){
      this.shouldEnable = false;
    } else{
      this.shouldEnable = true;
      // console.log('%c Debugger', 'color: green; font-weight: bold;text-decoration: underline;text-transform: uppercase;');
    }
  }

  $log(parent,msg){
    //if(this.shouldEnable) console.log('%c'+parent.constructor.name+"%c ->", 'color: #03a9f4; font-weight: bold;', 'color: red; font-weight: bold;',msg);
  }

  $warn(parent,msg){
   //if(this.shouldEnable) console.warn('%c'+parent.constructor.name+"%c ->", 'color: #03a9f4; font-weight: bold;', 'color: red; font-weight: bold;',msg);
  }

  $info(parent,msg){
   //if(this.shouldEnable) console.info('%c'+parent.constructor.name+"%c ->", 'color: #03a9f4; font-weight: bold;', 'color: red; font-weight: bold;',msg);
  }

  $error(parent,msg){
    //if(this.shouldEnable) console.error('%c'+parent.constructor.name+"%c ->", 'color: #03a9f4; font-weight: bold;', 'color: red; font-weight: bold;',msg);
  }

  $assert(parent,expr){
    //if(this.shouldEnable) console.assert(expr,parent.constructor.name+" ->");
  }

  $table(parent,obj){
    //if(this.shouldEnable) console.table(obj);
  }

}
*/