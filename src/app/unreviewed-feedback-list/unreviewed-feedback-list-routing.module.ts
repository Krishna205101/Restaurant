import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnreviewedFeedbackListPage } from './unreviewed-feedback-list.page';

const routes: Routes = [
  {
    path: '',
    component: UnreviewedFeedbackListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnreviewedFeedbackListPageRoutingModule {}
