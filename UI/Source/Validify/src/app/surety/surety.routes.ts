
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SuretyComponent } from "./surety.component";

const ROUTES:Routes = [
  {
    path: "",
    component: SuretyComponent,
    outlet:'surety'
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
  constructor(){
  }
 }

