import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AmazonLoginProvider, SocialLoginModule, SocialAuthServiceConfig} from 'angularx-social-login';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider('amzn1.application-oa2-client.d0469223693a46249c47509bcde62099')
          }
        ]
      }

    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
