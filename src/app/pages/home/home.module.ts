import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PostDialogueModule } from 'src/app/common/post-dialogue/post-dialogue.module';
import { PostModule } from 'src/app/common/post/post.module';
import { ModalModule } from 'src/app/common/modal/modal.module';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';
import { BackgroundAdjusterModule } from 'src/app/common/background-adjuster/background-adjuster.module';
import { NotificationButtonModule } from 'src/app/common/notification-button/notification-button.module';


@NgModule({
  declarations: [HomeComponent, CreatePostModalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostDialogueModule,
    PostModule,
    ModalModule,
    BackgroundAdjusterModule,
    NotificationButtonModule
  ]
})
export class HomeModule { }
