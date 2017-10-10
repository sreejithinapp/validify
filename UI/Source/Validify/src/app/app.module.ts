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
import { UtilsModule } from './utils/utils.module';
//import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';
import { LoaderComponent } from './core/loader/loader.component';

import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';
import { AuthService } from './auth/auth.service';
import { SharedService } from './core/shared.service';
import { HttpService } from './utils/http-service/http.service';
import { StorageService } from './utils/storage.service';
//import { LoggerService } from './utils/logger.service';
//import { DraftGuard } from './common/guard/draft.guard';


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
    UtilsModule,    
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
    SharedService, 
    HttpService,        
    StorageService  
    //DraftGuard, LoggerService,     
  ],
  bootstrap: [AppComponent]
})

export class AppModule {   
}

