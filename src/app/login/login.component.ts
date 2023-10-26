import { Component, OnInit } from '@angular/core';
import {AmazonLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

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
