import { Injectable } from '@angular/core';

import '@firebase/auth';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface TwitterCallbackResponse {
  auth_state: string;
  profile: any;
  twitter_profile: TwitterProfile;
}

export interface TwitterProfile {
  id: number;
  name: string;
  screen_name: string;
  description: string;
  email: string;
  profile_image_url: string;
}

export interface TwitterAuth {
  authorize_url: string;
}

export interface TwitterLoginRequest {
  oauth_token: string;
  oauth_verifier: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:8000';
  private token;

  constructor(private http: HttpClient) {}

  getToken(): Observable<string> {
    return of(this.token);
  }

  isAuthenticated(): Observable<boolean> {
    return of(!!this.token);
  }

  loginWithEmailAndPassword(email: string, password: string) {
    // const loginRequest: LoginRequest = {email, password};
    // return this.http.post<LoginResponse>(this.baseUrl + '/auth/jwt/', loginRequest)
    //   .pipe(map((loginResponse: LoginResponse) => {
    //   this.token = loginResponse.token;
    //   return this.token;
    // }));
  }

  getTwitterLoginURL(): Observable<TwitterAuth>  {
    return this.http.get<TwitterAuth>(this.baseUrl + '/auth/twitter/login/', { withCredentials: true });
  }

  loginWithTwitterCallback(oauthToken: string, oauthVerifier: string): Observable<TwitterCallbackResponse> {
    const twitterLoginRequest: TwitterLoginRequest = {oauth_token: oauthToken, oauth_verifier: oauthVerifier};
    return this.http.post<TwitterCallbackResponse>(this.baseUrl + '/auth/twitter/callback/', twitterLoginRequest)
      .pipe(map((twitterCallbackResponse: TwitterCallbackResponse) => {
        return twitterCallbackResponse;
      }));
  }
}
