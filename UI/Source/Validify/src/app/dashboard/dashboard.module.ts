
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutesModule } from "./dashboard.routes";
import { DashboardComponent } from "./dashboard.component";


@NgModule({  
  imports: [
    CommonModule,
    DashboardRoutesModule  
  ],
  declarations: [DashboardComponent]
})

export class DashboardModule {
  constructor(){}
 }

