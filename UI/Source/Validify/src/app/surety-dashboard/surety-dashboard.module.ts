
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuretyDashboardRoutesModule } from "./surety-dashboard.routes";
import { SuretyDashboardComponent } from "./surety-dashboard.component";


@NgModule({  
  imports: [
    CommonModule,
    SuretyDashboardRoutesModule  
  ],
  declarations: [SuretyDashboardComponent]
})

export class SuretyDashboardModule {
  constructor(){}
 }

