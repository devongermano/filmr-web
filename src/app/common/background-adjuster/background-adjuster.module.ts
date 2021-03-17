import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundAdjusterComponent } from './background-adjuster.component';



@NgModule({
  declarations: [BackgroundAdjusterComponent],
  imports: [
    CommonModule
  ],
  exports: [BackgroundAdjusterComponent]
})
export class BackgroundAdjusterModule { }
