
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./dashboard.component";


const ROUTES:Routes = [
  {
    path: "",
    component: DashboardComponent
  }
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],

  exports:[RouterModule]
})

export class DashboardRoutesModule { }

