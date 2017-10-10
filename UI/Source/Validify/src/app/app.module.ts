import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";
import { GrowlModule } from "primeng/components/growl/growl";
import { DialogModule } from 'primeng/primeng';
import { OverlayPanelModule } from 'primeng/primeng';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
//import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader/loader.component';

import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';
import { AuthService } from './auth/auth.service';
import { HttpService } from './shared/http-service/http.service';
import { SharedService } from './shared/shared.service';
import { StorageService } from './shared/storage.service';
//import { LoggerService } from './shared/logger.service';
//import { DraftGuard } from './shared/guard/draft.guard';


@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,

    ConfirmDialogModule,
    GrowlModule, 
    DialogModule,
    OverlayPanelModule,

    //LayoutModule,
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
    StorageService  
    //DraftGuard, LoggerService,     
  ],

  bootstrap: [AppComponent]
})

export class AppModule {   
}

