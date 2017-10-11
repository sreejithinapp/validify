
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SuretyDashboardComponent } from "./surety-dashboard.component";

const ROUTES:Routes = [
  {
    path: "",
    component: SuretyDashboardComponent,
    outlet:'suretydashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports:[RouterModule]
})

export class SuretyDashboardRoutesModule {
  constructor(){
  }
 }

