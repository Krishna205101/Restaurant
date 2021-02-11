import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerSelectionPageRoutingModule } from './customer-selection-routing.module';

import { CustomerSelectionPage } from './customer-selection.page';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    CustomerSelectionPageRoutingModule
  ],
  declarations: [CustomerSelectionPage]
})
export class CustomerSelectionPageModule {}
