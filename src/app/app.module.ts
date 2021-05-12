import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './common/sidebar/sidebar.module';
import { HeaderModule } from './common/header/header.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';
import { ServiceWorkerModule } from '@angular/service-worker';
import {PageHeaderModule} from './common/page-header/page-header.module';
import {BannerModule} from './components/banner/banner.module';
import {FooterModule} from './common/footer/footer.module';
import {ModalModule} from './pages/modal/modal.module';

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
        AngularFireModule.initializeApp(environment.firebase),
        RecaptchaV3Module,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        PageHeaderModule,
        BannerModule,
        FooterModule,
        ModalModule,
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
