import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  getItem<T>(key: string): Observable<T> {
    const item = localStorage.getItem(key);
    if (item) {
      const json = JSON.parse(localStorage.getItem(key));
      return of(json as T);
    }
    return of(null);
  }

  setItem(key: string, value: any) {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  }

  // Validated remove
  removeItem(key: string): Observable<boolean> {
    localStorage.removeItem(key);
    return this.getItem(key)
      .pipe(map((item: any) => {
      return !item;
    }));
  }

  clear(): Observable<boolean> {
    localStorage.clear();
    return of(true);
  }
}
