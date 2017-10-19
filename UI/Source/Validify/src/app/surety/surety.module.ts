
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrowlModule } from "primeng/components/growl/growl";
import { DialogModule } from 'primeng/primeng';

import { SharedModule} from '../shared/shared.module';
import { SuretyRoutesModule } from "./surety.routes";

import { SuretyComponent } from "./surety.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { SuretyService } from './surety.service';


@NgModule({  

  imports: [
    CommonModule,
    GrowlModule,    
    DialogModule,
    SharedModule,     
    SuretyRoutesModule  
  ],

  declarations: [
    SuretyComponent,    
    SidebarComponent,    
    DashboardComponent  
  ],

  providers: [
    SuretyService   
  ]

})

export class SuretyModule {
  constructor(){}
 }

