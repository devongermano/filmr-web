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
import {ContentModule} from '../../common/content/content.module';
import {PageHeaderModule} from '../../common/page-header/page-header.module';
import {BannerModule} from '../../components/banner/banner.module';
import {PageHeaderV2Module} from '../../common/page-header-v2/page-header-v2.module';
import {PhoneAuthenticationComponent} from './phone-authentication/phone-authentication.component';
import {FooterModule} from '../../common/footer/footer.module';


@NgModule({
  declarations: [LoginComponent,
                CallbackComponent,
                LinkComponent,
                AuthComponent,
                SignupComponent,
                PhoneAuthenticationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BackgroundAdjusterModule,
    IonicModule,
    FormsModule,
    ContentModule,
    PageHeaderModule,
    BannerModule,
    PageHeaderV2Module,
    FooterModule
  ]
})
export class AuthModule { }
