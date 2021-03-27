import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email = '';
  password = '';
  verifyPassword = '';

  errorMessage = '';

  constructor(public authService: AuthService,
              public userService: UserService,
              public router: Router) { }

  ngOnInit(): void {}

  onSubmit() {
    if (this.email) {
      this.authService.checkEmailExists(this.email)
        .subscribe((exists: boolean) => {
          console.log(exists);
        });
}


    if (this.password !== this.verifyPassword) {
      this.showError('The passwords do not match.');
    }
  }

  showError(errorMessage: string) {
    this.errorMessage = errorMessage;
  }


  hideError() {
    this.errorMessage = '';
  }
}
