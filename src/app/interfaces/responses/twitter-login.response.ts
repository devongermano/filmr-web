import {Jwt} from '../jwt';
import {ProfileModel} from '../models/profile.model';
import {TwitterProfileModel} from '../models/twitter-profile.model';

export interface TwitterLoginResponse {
  jwt: Jwt;
  profile: ProfileModel;
  twitter_profile: TwitterProfileModel;
}
