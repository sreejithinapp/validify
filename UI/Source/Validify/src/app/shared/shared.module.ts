
import { NgModule } from '@angular/core';

import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';


@NgModule({

    imports: [],

    declarations: [
        LoaderComponent,
        HeaderComponent
    ],

    providers: [],

    exports: [
        LoaderComponent,
        HeaderComponent
    ] 
       
})

export class SharedModule {
}
