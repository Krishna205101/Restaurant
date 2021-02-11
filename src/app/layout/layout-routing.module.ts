import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { EventGuard } from '../guards/event.guard';
import { SendSmsGuard } from '../guards/send-sms.guard';


import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: 'Customers-List',
        loadChildren: '../table/table.module#TablePageModule',
        canActivate: [AuthenticationGuard],
      },
      {
        path: 'Send-SMS',
        loadChildren: '../customer-selection/customer-selection.module#CustomerSelectionPageModule',
        canActivate: [SendSmsGuard],
      },
      {
        path: 'Events',
        loadChildren: '../events/events.module#EventsPageModule',
        canActivate: [EventGuard]
      },
      {
        path:'FeedbackList',
        loadChildren:'../feedback-list/feedback-list.module#FeedbackListPageModule',
        canActivate: [EventGuard],
        // children:[
        //     {
        //       path: 'ReviewedList',
        //       loadChildren: '../reviewed-feedback-list/reviewed-feedback-list.module#ReviewedFeedbackListPageModule',
        //       canActivate: [EventGuard]
        //     },
        //     {
        //       path: 'UnreviewedList',
        //       loadChildren: '../unreviewed-feedback-list/unreviewed-feedback-list.module#UnreviewedFeedbackListPageModule',
        //       canActivate: [EventGuard]
        //     },
        //     {
        //       path: '',
        //       redirectTo: '/layout/FeedbackList/ReviewedList',
        //       pathMatch: 'full'
        //     }
        //   ]
      },
      {
        path: '',
        redirectTo: '/layout/Customers-List',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class LayoutPageRoutingModule { }
