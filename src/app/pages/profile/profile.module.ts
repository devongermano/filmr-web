import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PageHeaderModule } from 'src/app/common/page-header/page-header.module';
import {PageHeaderV2Module} from '../../common/page-header-v2/page-header-v2.module';


@NgModule({
  declarations: [ProfileComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        PageHeaderModule,
        PageHeaderV2Module
    ]
})
export class ProfileModule { }
