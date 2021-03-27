import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable, of} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';
import {UserService} from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService,
              public userService: UserService,
              public router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(map(isAuthenticated => {
      if (!isAuthenticated) {
        this.router.navigate(['auth/login']);
        return false;
      }
      return true;
    }));
  }
}
