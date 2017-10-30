
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DoiComponent } from "./doi.component";
//import { SidebarComponent } from "./sidebar/sidebar.component";
//import { DashboardComponent } from "./dashboard/dashboard.component";


const ROUTES:Routes = [
  {
    path: "",
    component: DoiComponent    
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports:[RouterModule]
})

export class DoiRoutesModule {
  constructor(){ }
}

