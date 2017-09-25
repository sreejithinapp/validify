
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutesModule } from "./dashboard.routes";

import { DashboardComponent } from "./dashboard.component";

//import { ChartModule } from "primeng/components/chart/chart";

@NgModule({
  
  imports: [
    CommonModule,
    DashboardRoutesModule,
    /*ChartModule*/
  ],

  declarations: [DashboardComponent]
})

export class DashboardModule {
  constructor(){}
 }

