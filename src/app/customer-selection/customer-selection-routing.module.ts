import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerSelectionPage } from './customer-selection.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerSelectionPageRoutingModule {}
