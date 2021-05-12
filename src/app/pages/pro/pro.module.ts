import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProComponent } from './pro.component';
import { ProRoutingModule } from './pro-routing.module';
import { InjestComponent } from './injest/injest.component';
import { TalentComponent } from './talent/talent.component';



@NgModule({
  declarations: [ProComponent, InjestComponent, TalentComponent],
  imports: [
    CommonModule,
    ProRoutingModule
  ]
})
export class ProModule { }
