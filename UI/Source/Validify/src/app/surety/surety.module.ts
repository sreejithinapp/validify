
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule} from '../shared/shared.module';
import { SuretyRoutesModule } from "./surety.routes";

import { SuretyComponent } from "./surety.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

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
  ]

})

export class SuretyModule {
  constructor(){}
 }

