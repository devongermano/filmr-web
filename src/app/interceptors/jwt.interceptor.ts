import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import {Jwt} from '../interfaces/jwt';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.getJwtToken().pipe(flatMap((jwt: Jwt) => {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${jwt.access_token}`
        }
      });
      return next.handle(request);
    }));
  }
}
