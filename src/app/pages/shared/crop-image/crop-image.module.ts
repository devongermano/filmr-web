import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropImageComponent } from './crop-image.component';
import { CropImageRoutingModule } from "./crop-image-routing.module";
import { PageHeaderModule } from "../../../common/page-header/page-header.module";



@NgModule({
  declarations: [CropImageComponent],
  imports: [
    CommonModule,
    CropImageRoutingModule,
    PageHeaderModule
  ]
})
export class CropImageModule { }
