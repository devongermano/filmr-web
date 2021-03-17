import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserModel} from "../../interfaces/user.model";
import {Router} from "@angular/router";
import {PageHeaderType} from "../../common/page-header/page-header.component";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  pageHeaderType = PageHeaderType.Back;

  user: UserModel;

  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: UserModel) => {
      this.user = user;
    });
  }
}
