import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewedFeedbackListPageRoutingModule } from './reviewed-feedback-list-routing.module';

import { ReviewedFeedbackListPage } from './reviewed-feedback-list.page';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    ReviewedFeedbackListPageRoutingModule
  ],
  declarations: [ReviewedFeedbackListPage]
})
export class ReviewedFeedbackListPageModule {}
