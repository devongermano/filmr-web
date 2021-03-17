import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationButtonComponent } from './notification-button.component';



@NgModule({
  declarations: [NotificationButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationButtonComponent
  ]
})
export class NotificationButtonModule { }
