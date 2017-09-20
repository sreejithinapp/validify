import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { NotfoundComponent } from 'app/layout/notfound/notfound.component'; 
import { LoginGuard } from "app/auth/login.guard";
import { AuthGuard } from "app/auth/auth.guard";
import { SidebarComponent } from "app/layout/sidebar/sidebar.component";
import { HeaderComponent } from "app/layout/header/header.component";

const ROUTES:Routes = [    
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
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
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

export class AppRouterModule {
    constructor() {}
}

