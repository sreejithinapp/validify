import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GrowlModule } from 'primeng/components/growl/growl';

import { AuthRoutesModule } from './auth.routes';

import { LoginComponent } from './login/login.component';

//import { AuthService } from './auth.service';


@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    GrowlModule,
    AuthRoutesModule    
  ],  
  declarations: [LoginComponent],
  providers: []
})

export class AuthModule {
  constructor() { }
}

