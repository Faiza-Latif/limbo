import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgenciesPage } from './agencies.page';

const routes: Routes = [
  {
    path: '',
    component: AgenciesPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenciesPageRoutingModule {}
