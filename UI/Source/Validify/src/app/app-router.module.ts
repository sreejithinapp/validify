import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LoginGuard } from "./auth/login.guard";
import { AuthGuard } from "./auth/auth.guard";

const ROUTES:Routes = [    
    {
        path: "login",
        loadChildren: "./auth/auth.module#AuthModule",
        canActivate: [LoginGuard]
    },      
    {
        path: "doidashboard",
        loadChildren: "./doi-dashboard/doi-dashboard.module#DoiDashboardModule",
        canActivate: [AuthGuard]
    }, 
    {
        path: "suretydashboard",
        loadChildren: "./surety-dashboard/surety-dashboard.module#SuretyDashboardModule",
        canActivate: [AuthGuard]
    },  
    {
        path: "dashboard",
        loadChildren: "./dashboard/dashboard.module#DashboardModule",
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
    declarations: []
})

export class AppRouterModule {
    constructor() {}
}



/*
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
*/