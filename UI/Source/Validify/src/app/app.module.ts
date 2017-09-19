import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LayoutModule } from "app/layout/layout.module";

import {UtilsModule} from 'app/utils/utils.module';
//import {ConfirmDialogModule} from "primeng/components/confirmdialog/confirmdialog";
//import {GrowlModule} from "primeng/components/growl/growl";
//import {MalihuScrollbarModule} from 'ngx-malihu-scrollbar';
//import {WorkorderSharedModule} from "app/workorder/workorder-shared/workorder.shared.module";
import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import {LoaderComponent} from "app/core/loader/loader.component";


//import {AuthGuard} from "app/auth/auth.guard";
//import {AuthService} from "app/auth/auth.service";
//import {LoginGuard} from "app/auth/login.guard";

/*
import {DraftGuard} from "app/common/guard/draft.guard"

import {SharedService} from "app/core/shared.service";
import {HttpService} from "app/utils/http-service/http.service";
import {LoggerService} from "app/utils/logger.service";
import {StorageService} from "app/utils/storage.service";

*/


@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    LayoutModule,
    //CallModule, ConfirmDialogModule, GrowlModule, , MalihuScrollbarModule.forRoot(), UtilsModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    //LoaderComponent
  ],  

  providers: [
    /*AuthGuard,
    AuthService,
    DraftGuard,
    HttpService,
    LoggerService,
    LoginGuard,
    SharedService,
    StorageService*/
  ],

  bootstrap: [AppComponent]

})

export class AppModule {   
}

