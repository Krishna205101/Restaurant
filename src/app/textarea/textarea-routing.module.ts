import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextareaPage } from './textarea.page';

const routes: Routes = [
  {
    path: '',
    component: TextareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextareaPageRoutingModule {}
