import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import {transition, trigger, useAnimation} from "@angular/animations";
import {rotateCubeToLeft, fromBottomEasing, moveFromBottomFade, moveFromBottom} from "ngx-router-animations";
import {UserService} from './services/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:  [
    trigger('fromBottomEasing',  [ transition('home => comment', useAnimation(fromBottomEasing, {
      params: { enterTiming: '.2', leaveTiming: '.2'}
    }))])
  ]
})
export class AppComponent {
  title = 'socialdonut';

  constructor(public authService: AuthService, public userService: UserService) {}


  getState(outlet)  {
    return outlet.activatedRouteData.state;
  }
}
