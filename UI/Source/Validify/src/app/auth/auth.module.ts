
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutesModule } from './auth.routes';

import { LoginComponent } from './login/login.component';

import { AuthService } from "app/auth/auth.service";

//import { GrowlModule } from "primeng/components/growl/growl";

@NgModule({
 
  imports: [
    CommonModule,
    AuthRoutesModule,
    FormsModule,
    /*GrowlModule*/
  ],
  
  declarations: [LoginComponent]
})

export class AuthModule {
  constructor() { }
}

