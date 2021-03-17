import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { PageHeaderModule } from 'src/app/common/page-header/page-header.module';



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    PageHeaderModule
  ]
})
export class PostModule { }
