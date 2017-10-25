
import { NgModule } from '@angular/core';

import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';

import { CategoryPipe } from './pipes/category.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MinToTimePipe } from './pipes/min-to-time.pipe';

@NgModule({

    imports: [],

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
