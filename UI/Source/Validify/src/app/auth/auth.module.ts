import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GrowlModule } from 'primeng/components/growl/growl';
import { AuthRoutesModule } from './auth.routes';
import { LoginComponent } from './login/login.component';
import { BondSearchComponent } from './bond-search/bond-search.component';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    GrowlModule,
    AuthRoutesModule    
  ],  
  declarations: [
    LoginComponent,
    BondSearchComponent
  ] 
})

export class AuthModule {
  constructor() { }
}

