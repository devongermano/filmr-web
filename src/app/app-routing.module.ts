import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { LoginGuardService as LoginGuard} from './services/login-guard.service';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch:"full"},
  { path: '', loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashModule) },
  { path: 'auth', canActivate: [LoginGuard], loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'onboarding', loadChildren: () => import('./pages/onboarding/onboarding.module').then(m => m.OnboardingModule) },
  { path: 'complete-profile', loadChildren: () => import('./pages/complete-profile/complete-profile.module').then(m => m.CompleteProfileModule) },
  { path: 'home', data: {state:  'home'}, canActivate: [AuthGuard], loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'profile', data: {state:  'profile'}, canActivate: [AuthGuard], loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'edit-profile', data: {state:  'edit-profile'}, canActivate: [AuthGuard], loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfileModule) },
  { path: 'crop-image', data: {state:  'crop-image'}, canActivate: [AuthGuard], loadChildren: () => import('./pages/crop-image/crop-image.module').then(m => m.CropImageModule) },
  { path: 'post', canActivate: [AuthGuard], loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule) },
  { path: 'comment', data: {state:  'comment'}, canActivate: [AuthGuard], loadChildren: () => import('./pages/comment/comment.module').then(m => m.CommentModule) },
  { path: 'settings', canActivate: [AuthGuard], loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
