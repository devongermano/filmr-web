import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError, map, take } from 'rxjs/operators';
import {LocalStorageService} from './local-storage.service';

class CachedProperty<T> {
  name: string;
  value: T;

  constructor(name: string, value: T) {
    this.name = name;
    this.value = value;
  }

}

// export class CachedService {
//
//   private _cache: CachedProperty<any>[];
//
//   constructor() {}
//
//   load() {
//     this._cache.forEach((cachedProperty: CachedProperty<any>) => {
//       this[cachedProperty.name] = cachedProperty.value;
//     });
//   }
//
//   // dump() {
//   //   let propertyNames = Object.getOwnPropertyNames(this);
//   //   propertyNames.forEach((propertyName) => {
//   //     if(this[propertyName] instanceof CachedProperty) {
//   //       this._cache.push(this[propertyName]);
//   //     }
//   //   });
//   // }
//
//   cache(target: Object, name: string, descriptor?: TypedPropertyDescriptor<() => void>): any {
//     this._cache.push(new CachedProperty<any>(name, descriptor.value));
//     return descriptor;
//   }
// }


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  //
  // // Vars to be cached in localstorage
  // private _hasProfile: boolean;
  // private _profile: ProfileModel;
  //
  constructor(public httpClient: HttpClient,
              public authService: AuthService,
              private localStorageService: LocalStorageService) {}


  getProfile(): Observable<ProfileModel> {
    return this.localStorageService.getItem<ProfileModel>('profile');
    return this.httpClient.get<ProfileModel>(`${environment.socialDonutApiUrl}/profile`)
      .pipe(map((profile: ProfileModel) => {
        this.localStorageService.setItem('profile', profile);
        return profile;
      }));
  }

  //
  // hasProfile(): Observable<boolean> {
  //   if (this._hasProfile !== null) {
  //     return of(this._hasProfile);
  //   }
  //   return this.getProfile().pipe(
  //     take(1), map((_ => {
  //       this._hasProfile = true;
  //       return true;
  //     }), catchError((error: HttpErrorResponse) => {
  //       this._hasProfile = false;
  //       return of(false);
  //     })));
  // }
  //
  // // Fetches the logged in users profile implicitly using the id token's uuid
  // getProfile(): Observable<ProfileModel> {
  //   return this.httpClient.get<ProfileModel>(`${environment.socialDonutApiUrl}/profile`)
  //     .pipe(map((profile: ProfileModel) => {
  //       this._profile = profile;
  //     return profile;
  //   }));
  // }
  //
  // // Updates an individual property of the profile...
  // updateProfile(updates: any): Observable<ProfileModel> {
  //   return this.httpClient.patch<ProfileModel>(`${environment.socialDonutApiUrl}/profile`, updates);
  // }
  //
  // // Creates the initial profile by implictly getting data from the token... we can probably move this
  // // to a lambda later... just doing it here right now before we go down that rabbit hole
  // createProfile(): Observable<ProfileModel> {
  //   let extras = {};
  //   return this.httpClient.post<ProfileModel>(`${environment.socialDonutApiUrl}/profile`, extras);
  // }
}


export class ProfileModel {
  username: string;
  name: string;
  bio: string;
}
