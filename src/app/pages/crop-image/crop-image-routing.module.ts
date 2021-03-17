import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CropImageComponent} from "./crop-image.component";


const routes: Routes = [{ path: '', component: CropImageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropImageRoutingModule { }
