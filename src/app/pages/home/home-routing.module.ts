import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {ModalComponent} from '../modal/modal.component';
import {TestModalComponent} from '../modal/test-modal/test-modal.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      // {
      //   path: 'modal',
      //   component: ModalComponent,
      //   outlet: 'modal',
      // },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
