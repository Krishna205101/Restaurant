import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablePageRoutingModule } from './table-routing.module';

import { TablePage } from './table.page';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    TablePageRoutingModule
  ],
  declarations: [TablePage]
})
export class TablePageModule {}
