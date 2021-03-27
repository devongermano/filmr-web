import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserModel} from "../../interfaces/models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PageHeaderType} from "../../common/page-header/page-header.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pageHeaderType = PageHeaderType.None;

  user: UserModel;

  constructor(public userService: UserService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: UserModel) => {
      this.user = user;
    });
  }
}
