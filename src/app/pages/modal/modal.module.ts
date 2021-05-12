import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import {PageHeaderV2Module} from '../../common/page-header-v2/page-header-v2.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ModalComponent, TestModalComponent],
  imports: [
    CommonModule,
    PageHeaderV2Module,
    RouterModule,
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
