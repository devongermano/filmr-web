import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService} from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import {TwitterAuthResponse} from '../../../interfaces/responses/twitter-auth.response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  email = '';
  password = '';

  loginButtonDisabled = false;

  twitterAuthorizeUrl;

  error;


  @ViewChild('email') emailInput: ElementRef;

  constructor(public authService: AuthService,
              public router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private recaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.error = params.error;
    });

    // this.authService.getTwitterLoginUrl().subscribe((twitter: TwitterAuth) => {
    //   this.twitterAuthorizeUrl = twitter.authorize_url;
    // });
  }

  ngAfterViewInit(): void {}


  onTwitterLogin(): void {
    if (!this.twitterAuthorizeUrl) {
      this.authService.getTwitterLoginUrl().subscribe((twitter: TwitterAuthResponse) => {
        this.twitterAuthorizeUrl = twitter.authorize_url;
        window.location.href = twitter.authorize_url;
      });
    }
  }


  onEmailLogin() {
    this.loginButtonDisabled = true;
    this.authService.loginWithEmailAndPassword(this.email, this.password)
      // .subscribe((token: string) => {
      //   console.log(token);s
      //   this.onLoginSuccessful();
      // }, (error) => {
      //   console.error(error);
      //   this.loginButtonDisabled = false;
      // }, () => {
      //   // this.router.navigate(['home']);
      // });
  }

  onLoginSuccessful() {
    // Preload the user data
    this.router.navigate(['home']);
  }
}
