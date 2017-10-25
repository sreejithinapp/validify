
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { GrowlModule } from "primeng/components/growl/growl";
import { MessageService } from 'primeng/components/common/messageservice';

import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';
import { AuthService } from './auth/auth.service';
import { HttpService } from './shared/http-service/http.service';
import { SharedService } from './shared/shared.service';
import { StorageService } from './shared/storage.service';
import { HeaderService } from './shared/header/header.service';
import { DummyAPIService } from "./shared/dummy-api.service";


@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule, 
    GrowlModule,   
    AppRouterModule
  ],

  declarations: [
    AppComponent    
  ],  

  providers: [
    MessageService,
    AuthGuard,
    LoginGuard,    
    AuthService,  
    HttpService, 
    SharedService,
    StorageService,
    HeaderService, 
    DummyAPIService     
  ],

  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor() { }   
}
//..........................................................


