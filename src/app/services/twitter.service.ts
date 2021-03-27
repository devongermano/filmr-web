import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {TwitterAuthResponse, TwitterLoginRequest, TwitterLoginResponse} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {TwitterProfileModel} from '../interfaces/models/twitter-profile.model';


@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  private twitterProfile: TwitterProfileModel;



}
