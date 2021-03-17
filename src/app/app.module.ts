import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './common/sidebar/sidebar.module';
import { HeaderModule } from './common/header/header.module';
import { FooterModule } from './common/footer/footer.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './interceptors/jwt.interceptor';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    HeaderModule,
    FooterModule,
    AngularFireModule.initializeApp(environment.firebase),
    RecaptchaV3Module,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    IonicModule.forRoot({
      rippleEffect: true,
      mode: 'ios'
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
   // {
   //   provide: HTTP_INTERCEPTORS,
   //   useClass: JWTInterceptor,
   //   multi: true
   // },
    { provide: RECAPTCHA_V3_SITE_KEY,
      // TODO: Move this to a site configuration, preferably in Vault
      useValue: '6LfjqHsaAAAAAI8n1iKsYPMsGlzUtY8oJ3mevj9T'
    },
]
})
export class AppModule {}
