import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { PageHeaderModule } from 'src/app/common/page-header/page-header.module';
import {PageHeaderV2Module} from '../../common/page-header-v2/page-header-v2.module';


@NgModule({
  declarations: [SettingsComponent],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        PageHeaderModule,
        PageHeaderV2Module
    ]
})
export class SettingsModule { }
