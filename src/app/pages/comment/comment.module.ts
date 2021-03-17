import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { CommentRoutingModule } from './comment-routing.module';
import { PageHeaderModule } from 'src/app/common/page-header/page-header.module';



@NgModule({
  declarations: [CommentComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    PageHeaderModule
  ]
})
export class CommentModule { }
