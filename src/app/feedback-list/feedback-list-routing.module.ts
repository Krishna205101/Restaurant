import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventGuard } from '../guards/event.guard';

import { FeedbackListPage } from './feedback-list.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackListPage,
    children :[
      {
        path: 'ReviewedList',
        loadChildren: '../reviewed-feedback-list/reviewed-feedback-list.module#ReviewedFeedbackListPageModule',
        canActivate: [EventGuard]
      },
      {
        path: 'UnreviewedList',
        loadChildren: '../unreviewed-feedback-list/unreviewed-feedback-list.module#UnreviewedFeedbackListPageModule',
        canActivate: [EventGuard]
      },
      {
        path: '',
        redirectTo: '/layout/FeedbackList/ReviewedList',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackListPageRoutingModule {}
