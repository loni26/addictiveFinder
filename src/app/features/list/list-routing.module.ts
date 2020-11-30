import { ItemPageComponent } from './container/item-page/item-page.component';
import { ListPageComponent } from './container/list-page/list-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListPageComponent
      },
      {
        path: ':id',
        component: ItemPageComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
