import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { NotfoundComponent } from 'app/layout/notfound/notfound.component'; 

import { LoginGuard } from "app/auth/login.guard";
import { AuthGuard } from "app/auth/auth.guard";

import { SidebarComponent } from "app/layout/sidebar/sidebar.component";
import { HeaderComponent } from "app/layout/header/header.component";

const ROUTES: Routes = [ 
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    {
        path: "",
        outlet: 'sidebar',
        component: SidebarComponent
    },
    {
        path: "",
        outlet: 'header',
        component: HeaderComponent
    },
    {
        path: "login",
        loadChildren: "app/auth/auth.module#AuthModule",
        canActivate: [LoginGuard]
    },
    {
    path: "dashboard",
        loadChildren: "app/dashboard/dashboard.module#DashboardModule",
        canActivate: [AuthGuard]
    },   
    {
        path: "**",
        redirectTo: "/login",
        pathMatch: "full"
    }      
];


@NgModule({

    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})
    ],

    exports: [RouterModule],

    declarations: [NotfoundComponent]
})

export class AppRoutingModule {
 constructor() {}
}


/*

const ROUTES: Routes = [
 {
  path: "",
  redirectTo: "/dashboard",
  pathMatch: "full"
 },
 {
  path: "",
  outlet: 'sidebar',
  component: SidebarComponent
 },
 {
  path: "",
  outlet: 'header',
  component: HeaderComponent
 },
 {
  path: "login",
  loadChildren: "app/auth/auth.module#AuthModule",
  canActivate: [LoginGuard]
 },
 {
  path: "dashboard",
  loadChildren: "app/dashboard/dashboard.module#DashboardModule",
  canActivate: [AuthGuard]
 },
 {
  path: "customer",
  loadChildren: "app/customer/customer.module#CustomerModule",
  canActivate: [AuthGuard]
 },
 {
  path: "workorder",
  loadChildren: "app/workorder/workorder.module#WorkorderModule",
  canActivate: [AuthGuard]

 },
 {
  path: "employee",
  loadChildren: "app/employee/employee.module#EmployeeModule",
  canActivate: [AuthGuard]
 },
 {
  path: "equipment",
  loadChildren: "app/equipment/equipment.module#EquipmentModule",
  canActivate: [AuthGuard],
 },
 {
  path: "master",
  loadChildren: "app/master/master.module#MasterModule",
  canActivate: [AuthGuard]
 },
 {
  path: "roles",
  loadChildren: "app/roles/roles.module#RolesModule",
  canActivate: [AuthGuard]
 },
 {
  path: "**",
  redirectTo: "/login",
  pathMatch: "full"
 }
];



*/