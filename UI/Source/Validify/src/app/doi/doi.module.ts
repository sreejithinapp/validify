
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    FormsModule,  
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

