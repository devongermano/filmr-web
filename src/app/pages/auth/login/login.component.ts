import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../../../services/user.service';
import { AuthService, TwitterAuth } from '../../../services/auth.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

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


  @ViewChild('email') emailInput: ElementRef;

  constructor(public authService: AuthService,
              public router: Router,
              private userService: UserService,
              private recaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit(): void {
    this.authService.getTwitterLoginURL().subscribe((twitter: TwitterAuth) => {
      this.twitterAuthorizeUrl = twitter.authorize_url;
    });
  }

  ngAfterViewInit(): void {}


  onTwitterLogin(): void {
    window.location.href = this.twitterAuthorizeUrl;
  }


  onEmailLogin() {
    this.loginButtonDisabled = true;
    this.authService.loginWithEmailAndPassword(this.email, this.password)
      // .subscribe((token: string) => {
      //   console.log(token);
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
