
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoiDashboardRoutesModule } from "./doi-dashboard.routes";

import { DoiDashboardComponent } from "./doi-dashboard.component";


@NgModule({  
  imports: [
    CommonModule,
    DoiDashboardRoutesModule  
  ],
  declarations: [DoiDashboardComponent]
})

export class DoiDashboardModule {
  constructor(){}
 }

