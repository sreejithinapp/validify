import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { GrowlModule } from "primeng/components/growl/growl";
import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";
import { DialogModule } from 'primeng/primeng';
import { OverlayPanelModule } from 'primeng/primeng';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader/loader.component';

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

    GrowlModule, 
    ConfirmDialogModule,    
    DialogModule,
    OverlayPanelModule,
   
    SharedModule,    
    AppRouterModule
  ],

  declarations: [
    AppComponent,
    LoaderComponent
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

