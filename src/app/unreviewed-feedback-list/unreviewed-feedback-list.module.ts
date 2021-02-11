import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnreviewedFeedbackListPageRoutingModule } from './unreviewed-feedback-list-routing.module';

import { UnreviewedFeedbackListPage } from './unreviewed-feedback-list.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    UnreviewedFeedbackListPageRoutingModule
  ],
  declarations: [UnreviewedFeedbackListPage]
})
export class UnreviewedFeedbackListPageModule {}
