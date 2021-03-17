import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, TwitterCallbackResponse } from '../../../services/auth.service';

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

      this.authService.loginWithTwitterCallback(this.oauthToken, this.oauthVerifier)
        .subscribe((twitterCallbackResponse: TwitterCallbackResponse) => {
        console.log(twitterCallbackResponse);
        if (twitterCallbackResponse.auth_state === 'link_account') {
          this.router.navigate(['auth/link']);
        }
        if (twitterCallbackResponse.auth_state === 'create_account') {
          this.router.navigate(['auth/signup']);
        }
      });
    });
  }
}
