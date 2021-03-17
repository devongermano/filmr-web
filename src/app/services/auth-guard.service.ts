import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable, of} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';
import {UserService} from "./user.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService, public userService: UserService, public router: Router) { }

  canActivate(): Observable<boolean> {
    // return this.authService.isAuthenticated()
    //   .pipe(
    //     flatMap((isAuthenticated: boolean) => {
    //       if (!isAuthenticated) {
    //         console.log("Not authenticated, kick the user back to the auth screen.");
    //         this.router.navigate(['auth']);
    //         return of(false);
    //       }
    //       return this.userService.isApiUser()
    //     }), map((isApiUser: boolean) => {
    //       if (!isApiUser) {
    //         console.log("Authenticated, but is not an API user, redirect to complete-profile.");
    //
    //         this.router.navigate(['complete-profile']);
    //         return false;
    //       }
    //       console.log("Pass.");
    //       return true;
    //     }));

    return this.authService.isAuthenticated().pipe(map(isAuthenticated => {
      if(!isAuthenticated) {
        this.router.navigate(['auth']);
        return false;
      }
      return true;
    }));
  }
}
