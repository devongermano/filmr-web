import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(map((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['home']);
        return false;
      }
      return true;
    }));
  }
}
