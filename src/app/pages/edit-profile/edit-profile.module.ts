import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import { EditProfileRoutingModule } from "./edit-profile-routing.module";
import {PageHeaderModule} from "../../common/page-header/page-header.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [EditProfileComponent],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    PageHeaderModule,
    FormsModule
  ]
})
export class EditProfileModule { }
