
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuretyDashboardRoutesModule } from "./surety-dashboard.routes";

import { SuretyDashboardComponent } from "./surety-dashboard.component";
import { HeaderComponent } from "../shared/header/header.component";


@NgModule({  
  imports: [
    CommonModule,
    SuretyDashboardRoutesModule  
  ],
  declarations: [
    SuretyDashboardComponent,
    HeaderComponent
  ]
})

export class SuretyDashboardModule {
  constructor(){}
 }

