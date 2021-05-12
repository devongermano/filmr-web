import {Component, OnInit} from '@angular/core';
import { AuthService } from './services/auth.service';
import {animate, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {UserService} from './services/user.service';
import {ActivatedRoute, ActivationEnd, Router, RoutesRecognized} from '@angular/router';

const instaCoverFromRightAnimation = trigger('isVisibleChanged', [
  state('modal', style({
    position: 'fixed',
    top: '0',
    left: '0',
  })),
  state('*', style({
    left: '100%'
  })),
  transition('* <=> modal', animate('300ms cubic-bezier(0.16, 1, 0.3, 1)')),
  transition('modal <=> *', animate('250ms cubic-bezier(0.85, 0, 0.15, 1)')),
]);

const instaRevealFromLeftAnimation = trigger('isVisibleChanged', [
  state('modal', style({
    left: '0'
  })),
  state('*', style({
    left: '100%'
  })),
  transition('* => *', animate('300ms cubic-bezier(0.16, 1, 0.3, 1)')),
  transition('* => void', animate('250ms cubic-bezier(0.85, 0, 0.15, 1)')),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:  [
    // trigger('fromBottomEasing',  [ transition('* => *', useAnimation(fromBottomEasing, {
    //   params: { enterTiming: '.2', leaveTiming: '.2'}
    // }))])
    instaCoverFromRightAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'socialdonut';

  showMenu = false;

  constructor(public authService: AuthService,
              public userService: UserService,
              public router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        const routeData = data.state.root.firstChild.data;
        this.showMenu = routeData.showMenu;
      }
    });
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
