import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../interfaces/models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PageHeaderType} from '../../common/page-header/page-header.component';
import {ProfileModel, ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pageHeaderType = PageHeaderType.None;

  profile: ProfileModel;

  constructor(public profileService: ProfileService,
              public router: Router,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => {
      this.profile = profile;
    });
  }
}
