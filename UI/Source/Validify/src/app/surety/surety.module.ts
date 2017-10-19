
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule} from '../shared/shared.module';
import { SuretyRoutesModule } from "./surety.routes";

import { SuretyComponent } from "./surety.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { DashboardService } from './dashboard/dashboard.service';
//import { SidebarService } from './sidebar/sidebar.service';


@NgModule({  

  imports: [
    CommonModule,
    SharedModule,
    SuretyRoutesModule  
  ],

  declarations: [
    SuretyComponent,    
    SidebarComponent,    
    DashboardComponent  
  ],

  providers: [
    DashboardService   
  ]

})

export class SuretyModule {
  constructor(){}
 }

