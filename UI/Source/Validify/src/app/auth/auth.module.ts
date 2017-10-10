import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GrowlModule } from 'primeng/components/growl/growl';

import { AuthRoutesModule } from './auth.routes';

import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';


@NgModule({ 
  imports: [
    CommonModule,
    AuthRoutesModule,
    FormsModule,
    GrowlModule
  ],  
  declarations: [LoginComponent]
})

export class AuthModule {
  constructor() { }
}

