import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderV2Component } from './page-header-v2.component';



@NgModule({
  declarations: [PageHeaderV2Component],
  imports: [
    CommonModule
  ],
  exports: [PageHeaderV2Component]
})
export class PageHeaderV2Module { }
