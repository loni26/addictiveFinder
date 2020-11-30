import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListPageComponent } from './container/list-page/list-page.component';
import { ItemPageComponent } from './container/item-page/item-page.component';


@NgModule({
  declarations: [ ListPageComponent, ItemPageComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule
  ]
})
export class ListModule { }
