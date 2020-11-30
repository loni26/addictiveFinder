import { TabsComponent } from './container/tabs/tabs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: TabsComponent,
    children: [
      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then(m => m.SearchModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then(m => m.ListModule)
      },
      {
        path: '', redirectTo: 'search', pathMatch: 'full'
      }
    ]
  },
  {
    path: '', redirectTo: 'tabs/search', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
