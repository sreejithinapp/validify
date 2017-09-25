import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ConfirmDialogModule } from "primeng/components/confirmdialog/confirmdialog";
import { GrowlModule } from "primeng/components/growl/growl";

import { LayoutModule } from "app/layout/layout.module";
import { UtilsModule } from 'app/utils/utils.module';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { LoaderComponent } from "app/core/loader/loader.component";

import { AuthGuard } from "app/auth/auth.guard";
import { LoginGuard } from "app/auth/login.guard";
import { AuthService } from "app/auth/auth.service";
import { SharedService } from "app/core/shared.service";
import { HttpService } from "app/utils/http-service/http.service";
import { LoggerService } from "app/utils/logger.service";
import { StorageService } from "app/utils/storage.service";
import { DraftGuard } from "app/common/guard/draft.guard"


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    LayoutModule,
    UtilsModule,
    ConfirmDialogModule,
    GrowlModule, 
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
    LoggerService,      
    StorageService,  
    DraftGuard,  
  ],
  bootstrap: [AppComponent]
})

export class AppModule {   
}

