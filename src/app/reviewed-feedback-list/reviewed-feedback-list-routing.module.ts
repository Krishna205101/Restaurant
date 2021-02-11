import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewedFeedbackListPage } from './reviewed-feedback-list.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewedFeedbackListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewedFeedbackListPageRoutingModule {}
