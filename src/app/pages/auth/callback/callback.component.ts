import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import {TwitterLoginResponse} from '../../../interfaces/responses/twitter-login.response';

export interface APIError {
  message: string;
  code: string;
}



@Component({
  selector: 'app-twitter-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  oauthToken;
  oauthVerifier;

  provider;

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.oauthToken = params.oauth_token;
      this.oauthVerifier = params.oauth_verifier;
      this.provider = params.provider;

      console.log(this.oauthToken);
      console.log(this.oauthVerifier);
      console.log(this.provider);

      this.authService.loginWithTwitter(this.oauthToken, this.oauthVerifier)
        .subscribe((twitterCallbackResponse: TwitterLoginResponse) => {
          // Check if this is the first time the user has logged in, then route them to the correct page
          this.router.navigate(['onboarding']);
      }, error => {
          const parsedError = this.parseAPIError(error.error);
          this.router.navigate(['auth/login'], { queryParams: { error: parsedError.message }});
        });
    });
  }
  parseAPIError(error): APIError {
    if (Array.isArray(error)) {
      return error[0];
    } else {
      return error;
    }
  }
}
