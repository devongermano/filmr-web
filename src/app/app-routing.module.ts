import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { LoginGuardService as LoginGuard} from './services/login-guard.service';
import {ModalComponent} from './pages/modal/modal.component';
import {TestModalComponent} from './pages/modal/test-modal/test-modal.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'auth', data: {showMenu: false}, canActivate: [LoginGuard], loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'pro', canActivate: [], loadChildren: () => import('./pages/pro/pro.module').then(m => m.ProModule) },
  { path: 'onboarding', data: {showMenu: false}, loadChildren: () => import('./pages/auth/onboarding/onboarding.module').then(m => m.OnboardingModule) },
  { path: '', data: {showMenu: true}, canActivate: [AuthGuard], loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'profile', data: {showMenu: true}, canActivate: [AuthGuard], loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'edit-profile', data: {state:  'edit-profile'}, canActivate: [AuthGuard], loadChildren: () => import('./pages/profile/edit-profile/edit-profile.module').then(m => m.EditProfileModule) },
  { path: 'crop-image', data: {state:  'crop-image'}, canActivate: [AuthGuard], loadChildren: () => import('./pages/shared/crop-image/crop-image.module').then(m => m.CropImageModule) },
  { path: 'post', data: {showMenu: true}, canActivate: [AuthGuard], loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule) },
  { path: 'comment', data: {state:  'comment'}, canActivate: [AuthGuard], loadChildren: () => import('./pages/comment/comment.module').then(m => m.CommentModule) },
  { path: 'settings', data: {showMenu: true}, canActivate: [AuthGuard], loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) },
  {
    path: 'modal',
    component: ModalComponent,
    outlet: 'modal',
    data: { state: 'modal', depth: 1},
    children: [
      {
        path: 'modal',
        component: ModalComponent,
        outlet: 'modal',
        data: { state: 'modal'},
      },
    ]
  },
  {
    path: 'likes',
    component: ModalComponent,
    outlet: 'modal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
