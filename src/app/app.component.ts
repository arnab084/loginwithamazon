import { Component } from '@angular/core';
import {AmazonLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-demo-app';
  authServiceSSO: SocialAuthService;

  constructor(authServiceSSO: SocialAuthService) {
    this.authServiceSSO = authServiceSSO;
  }

  signInWithAmazon(): any {
    this.authServiceSSO.signIn(AmazonLoginProvider.PROVIDER_ID).then(() => {
      this.authServiceSSO.authState.subscribe((user: SocialUser) => {
        console.log(user);
      });
    });
  }
}
