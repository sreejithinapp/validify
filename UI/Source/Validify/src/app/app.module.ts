import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';
import { AuthService } from './auth/auth.service';
import { HttpService } from './shared/http-service/http.service';
import { SharedService } from './shared/shared.service';
import { StorageService } from './shared/storage.service';
import { DummyAPIService } from "./shared/dummy-api.service";


@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,    
    AppRouterModule
  ],

  declarations: [
    AppComponent    
  ],  

  providers: [
    AuthGuard,
    LoginGuard,    
    AuthService,  
    HttpService, 
    SharedService,            
    StorageService,
    DummyAPIService     
  ],

  bootstrap: [AppComponent]
})

export class AppModule {   
}



//import { GrowlModule } from "primeng/components/growl/growl";
//import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";
//import { DialogModule } from 'primeng/primeng';
//import { OverlayPanelModule } from 'primeng/primeng';
////GrowlModule, ConfirmDialogModule, DialogModule, OverlayPanelModule,   