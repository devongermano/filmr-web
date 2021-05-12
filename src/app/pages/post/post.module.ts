import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { PageHeaderModule } from 'src/app/common/page-header/page-header.module';
import {PageHeaderV2Module} from '../../common/page-header-v2/page-header-v2.module';



@NgModule({
  declarations: [PostComponent],
    imports: [
        CommonModule,
        PostRoutingModule,
        PageHeaderModule,
        PageHeaderV2Module
    ]
})
export class PostModule { }
