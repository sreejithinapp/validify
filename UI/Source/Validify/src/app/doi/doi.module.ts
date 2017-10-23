
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrowlModule } from "primeng/components/growl/growl";
import { DialogModule } from 'primeng/primeng';

import { SharedModule} from '../shared/shared.module';
import { DoiRoutesModule } from "./doi.routes";

import { DoiComponent } from "./doi.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { DoiService } from './doi.service';

@NgModule({  

  imports: [
    CommonModule,
    GrowlModule,    
    DialogModule,
    SharedModule,
    DoiRoutesModule  
  ],

  declarations: [
    DoiComponent,    
    SidebarComponent,    
    DashboardComponent   
  ],

  providers: [
    DoiService   
  ]

})

export class DoiModule {
  constructor(){}
 }

