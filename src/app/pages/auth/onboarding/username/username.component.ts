import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../../../services/local-storage.service';
import {ProfileService} from '../../../../services/profile.service';
import {TwitterProfileModel} from '../../../../interfaces/models/twitter-profile.model';
import {ProfileModel} from '../../../../interfaces/models/profile.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService,
              private profileService: ProfileService,
              public router: Router) {}

  twitterProfile: TwitterProfileModel;
  profile: ProfileModel;

  ngOnInit(): void {
    this.localStorageService.getItem<TwitterProfileModel>('twitterProfile')
      .subscribe((twitterProfile: TwitterProfileModel) => {
        this.twitterProfile = twitterProfile;
      });

    this.localStorageService.getItem<ProfileModel>('profile')
      .subscribe((profile: ProfileModel) => {
        this.profile = profile;
      });
  }
}
