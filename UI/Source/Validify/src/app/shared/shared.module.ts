
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/primeng';

import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';

import { CategoryPipe } from './pipes/category.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MinToTimePipe } from './pipes/min-to-time.pipe';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,           
        DialogModule
    ],

    declarations: [
        LoaderComponent,
        HeaderComponent,      
        CategoryPipe,
        OrderByPipe,
        TruncatePipe,
        MinToTimePipe
    ],

    providers: [],

    exports: [
        LoaderComponent,
        HeaderComponent,     
        CategoryPipe,
        OrderByPipe,
        TruncatePipe,
        MinToTimePipe
    ] 
       
})

export class SharedModule {
}
