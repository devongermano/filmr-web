import {Jwt} from '../jwt';
import {ProfileModel} from '../models/profile.model';

export interface EmailLoginResponse {
  jwt: Jwt;
  profile: ProfileModel;
}
