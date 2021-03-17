import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteProfileComponent } from './complete-profile.component';
import {CompleteProfileRoutingModule} from "./complete-profile-routing.module";



@NgModule({
  declarations: [CompleteProfileComponent],
  imports: [
    CommonModule,
    CompleteProfileRoutingModule
  ]
})
export class CompleteProfileModule { }
