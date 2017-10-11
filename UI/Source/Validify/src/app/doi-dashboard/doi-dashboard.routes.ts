
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DoiDashboardComponent } from "./doi-dashboard.component";

const ROUTES:Routes = [
  {
    path: "",
    component: DoiDashboardComponent,
    outlet:'doidashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports:[RouterModule]
})

export class DoiDashboardRoutesModule {
  constructor(){
  }
 }

