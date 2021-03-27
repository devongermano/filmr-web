import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';
import {CreatorComponent} from './creator/creator.component';
import {AgeComponent} from './age/age.component';
import {UsernameComponent} from './username/username.component';
import {AdultContentComponent} from './adult-content/adult-content.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'username'
  },
  {
    path: 'username', component: UsernameComponent,
  },
  {
    path: 'age', component: AgeComponent,
  },
  {
    path: 'creator', component: CreatorComponent,
  },
  {
    path: 'adult-content', component: AdultContentComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
