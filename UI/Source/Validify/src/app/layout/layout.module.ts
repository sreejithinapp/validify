import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

/*
import {GrowlModule} from "primeng/components/growl/growl";
import {ImgFallbackModule} from 'app/common/directive/img-fallback.module';
import {NgStringPipesModule} from 'ngx-pipes/src/app/pipes/string/index';
import {OverlayPanelModule} from "primeng/components/overlaypanel/overlaypanel";

import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import {ConfirmationService} from "primeng/components/common/confirmationservice";
import {HeaderService} from './header/header.service';
import {SidebarService} from 'app/layout/sidebar/sidebar.service';
*/

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        RouterModule,

        /*GrowlModule,
        ImgFallbackModule,
        NgStringPipesModule,
        OverlayPanelModule,*/
    ],

    declarations: [
        //HeaderComponent,
        //SidebarComponent
    ],

    exports: [
        //HeaderComponent,
        //SidebarComponent
    ],

    providers: [
        //ConfirmationService,
        //HeaderService,
        //SidebarService
    ]
})


export class LayoutModule {
}
