import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from "@angular/forms";

//import { GrowlModule } from 'primeng/primeng';
//import { PaginationModule } from "ngx-bootstrap/pagination";

import { StorageService } from "./storage.service";
import { SharedService } from './shared.service';

//import { ControlMessagesComponent } from './control-messages/control-messages.component';
//import { PaginationComponent } from './pagination/pagination.component';

@NgModule({

    imports: [
        //CommonModule,
        //FormsModule,
        //GrowlModule, PaginationModule.forRoot()
    ],

    declarations: [
        //ControlMessagesComponent, PaginationComponent
    ],

    providers: [
        StorageService,
        SharedService
    ],

    exports: [
        //ControlMessagesComponent, GrowlModule, PaginationComponent
    ]
    
})

export class SharedModule {
}
