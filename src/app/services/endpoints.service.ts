import { Injectable } from '@angular/core';

enum Endpoints {
  SOCIALDONUT, SOMEOTHER
}


@Injectable({
  providedIn: 'root'
})
export class EndpointsService {


  socialDonutApiEndpoint: string;
  someOtherApiEndpoint: string;

  constructor() {
    this.socialDonutApiEndpoint = 'api.devon.dev';
  }

  request(apiEndpoint: Endpoints) {
    
  }



}
