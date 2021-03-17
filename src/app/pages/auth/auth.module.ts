import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BackgroundAdjusterModule } from 'src/app/common/background-adjuster/background-adjuster.module';
import { CallbackComponent } from './callback/callback.component';
import { LinkComponent } from './link/link.component';
import {IonicModule} from '@ionic/angular';
import { AuthComponent } from './auth.component';
import {SignupComponent} from './signup/signup.component';


@NgModule({
  declarations: [LoginComponent,
                CallbackComponent,
                LinkComponent,
                AuthComponent,
                SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BackgroundAdjusterModule,
    IonicModule,
    FormsModule,
  ]
})
export class AuthModule { }
