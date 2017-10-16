
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule} from '../shared/shared.module';
import { DoiRoutesModule } from "./doi.routes";

import { DoiComponent } from "./doi.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


@NgModule({  

  imports: [
    CommonModule,
    SharedModule,
    DoiRoutesModule  
  ],

  declarations: [
    DoiComponent,    
    SidebarComponent,    
    DashboardComponent   
  ]

})

export class DoiModule {
  constructor(){}
 }

