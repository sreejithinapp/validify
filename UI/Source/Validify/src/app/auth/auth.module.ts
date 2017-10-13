import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/primeng';

import { AuthRoutesModule } from './auth.routes';

import { LoginComponent } from './login/login.component';
import { BondSearchComponent } from './bond-search/bond-search.component';
import { ForgotComponent } from './forgot/forgot.component';
//import { HelpComponent } from './help/help.component';


@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,     
    DialogModule,  
    AuthRoutesModule    
  ],  
  declarations: [
    LoginComponent,
    BondSearchComponent,
    ForgotComponent
  ] 
})

export class AuthModule {
  constructor() { }
}

