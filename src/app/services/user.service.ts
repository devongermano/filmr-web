import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import {UpdateUserModel, UserModel} from "../interfaces/models/user.model";
import firebase from '@firebase/app';
import '@firebase/storage';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserModel;
  private userBehaviorSubject: BehaviorSubject<UserModel> = new BehaviorSubject(this.user);
  userObservable: Observable<UserModel> = this.userBehaviorSubject.asObservable();

  constructor(public httpClient: HttpClient) {}

  getUser(): Observable<UserModel> {
    if (this.user) {
      return this.userObservable;
    }
    return this.httpClient.get<UserModel>(`${environment.socialDonutApiUrl}/user`)
      .pipe(take(1), map((user: UserModel) => {
        this.user = user;
        this.userBehaviorSubject.next(user);
        return user;
      }));
  }

  createUser(): Observable<UserModel> {
    return this.httpClient.post<UserModel>(`${environment.socialDonutApiUrl}/user`, {})
      .pipe(take(1), map((user: UserModel) => {
        this.user = user;
        this.userBehaviorSubject.next(user);
        return user;
      }));
  }

  updateUser(updateUser: UpdateUserModel): Observable<UserModel> {
    return this.httpClient.patch<UserModel>(`${environment.socialDonutApiUrl}/user`, updateUser)
      .pipe(take(1), map((user: UserModel) => {
        this.user = user;
        this.userBehaviorSubject.next(user);
        return user;
      }));
  }

  updateUserPhoto(file: File) {
    let storage = firebase.storage();
    let storageRef = storage.ref();
    storageRef.child(`${this.user.firebaseUuid}.png`).put(file)
      .then(result => {
        console.log(result);
      });
  }
}
