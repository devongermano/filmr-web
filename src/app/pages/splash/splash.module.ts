import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';
import { SplashRoutingModule } from "./spash-routing.module";



@NgModule({
  declarations: [SplashComponent],
  imports: [
    CommonModule,
    SplashRoutingModule
  ]
})
export class SplashModule { }
