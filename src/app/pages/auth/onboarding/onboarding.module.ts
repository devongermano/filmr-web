import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import {OnboardingRoutingModule} from './onboarding-routing.module';
import {FormsModule} from '@angular/forms';
import { UsernameComponent } from './username/username.component';
import { AgeComponent } from './age/age.component';
import { AdultContentComponent } from './adult-content/adult-content.component';
import { CreatorComponent } from './creator/creator.component';
import { BankingComponent } from './banking/banking.component';
import {PageHeaderModule} from '../../../common/page-header/page-header.module';
import {ContentModule} from '../../../common/content/content.module';
import {PageHeaderV2Module} from '../../../common/page-header-v2/page-header-v2.module';
import {ThrobberModule} from '../../../common/throbber/throbber.module';



@NgModule({
  declarations: [OnboardingComponent, UsernameComponent, AgeComponent, AdultContentComponent, CreatorComponent, BankingComponent],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    FormsModule,
    PageHeaderModule,
    ContentModule,
    PageHeaderV2Module,
    ThrobberModule,
  ]
})
export class OnboardingModule { }
