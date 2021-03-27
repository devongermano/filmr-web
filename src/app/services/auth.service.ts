import { Injectable } from '@angular/core';

import '@firebase/auth';
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Jwt} from '../interfaces/jwt';
import {LocalStorageService} from './local-storage.service';
import {TwitterLoginRequest} from '../interfaces/requests/twitter-login.request';
import {TwitterLoginResponse} from '../interfaces/responses/twitter-login.response';
import {TwitterAuthResponse} from '../interfaces/responses/twitter-auth.response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService) {}


   getJwtToken(): Observable<Jwt>  {
    return this.localStorageService.getItem<Jwt>('jwt');
   }

  isAuthenticated(): Observable<boolean> {
    return this.getJwtToken()
      .pipe(map((jwt: Jwt) => {
      return !!jwt;
    }));
  }

  loginWithEmailAndPassword(email: string, password: string) {
    // const loginRequest: LoginRequest = {email, password};
    // return this.http.post<LoginResponse>(this.baseUrl + '/auth/jwt/', loginRequest)
    //   .pipe(map((loginResponse: LoginResponse) => {
    //   this.token = loginResponse.token;
    //   return this.token;
    // }));
  }

  checkEmailExists(email: string): Observable<boolean> {
    const subject: Subject<boolean> = new Subject();
    this.http.get(this.baseUrl + `/auth/email/exists?email=${email}`).subscribe(_ => {
      subject.next(true);
    }, error => {
      catchError(error);
      subject.next(false);
    });
    return subject.asObservable();
  }

  getTwitterLoginUrl(): Observable<TwitterAuthResponse>  {
    return this.http.get<TwitterAuthResponse>(this.baseUrl + '/auth/twitter/login/', { withCredentials: true });
  }

  loginWithTwitter(oauthToken: string, oauthVerifier: string): Observable<TwitterLoginResponse> {
    const twitterLoginRequest: TwitterLoginRequest = {oauth_token: oauthToken, oauth_verifier: oauthVerifier};
    return this.http.post<TwitterLoginResponse>(this.baseUrl + '/auth/twitter/callback/', twitterLoginRequest)
      .pipe(map((twitterLoginResponse: TwitterLoginResponse) => {
        this.localStorageService.setItem('profile', twitterLoginResponse.profile);
        this.localStorageService.setItem('twitterProfile', twitterLoginResponse.twitter_profile);
        this.localStorageService.setItem('jwt', twitterLoginResponse.jwt);
        return twitterLoginResponse;
      }));
  }

  logout(): Observable<boolean> {
    return this.localStorageService.clear();
  }
}
