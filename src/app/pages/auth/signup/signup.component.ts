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

  signupError = '';

  constructor(public authService: AuthService,
              public userService: UserService,
              public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.authService.signUpWithEmailandPassword(this.email, this.password)
    //   .subscribe(result => {
    //     this.userService.createUser().subscribe(result => {
    //       this.router.navigate(['home']);
    //     });
    //   }, error => {
    //     if(error.code === FirebaseAuthErrorCodes.EmailAlreadyInUse) {
    //       // this.authService.linkExistingToPassword(this.email, this.password);
    //     }
    //   }
    // );
  }
}
