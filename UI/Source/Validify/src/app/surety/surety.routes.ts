
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SuretyComponent } from "./surety.component";
//import { SidebarComponent } from "./sidebar/sidebar.component";
//import { DashboardComponent } from "./dashboard/dashboard.component";

const ROUTES:Routes = [
  {
    path: "",
    component: SuretyComponent    
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports:[RouterModule]
})

export class SuretyRoutesModule {
  constructor(){ }
}

//outlet:'surety'