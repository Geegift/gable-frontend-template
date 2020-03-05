import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListgroupComponent } from './listgroup.component';

const routes: Routes = [
  {
    path: '',
    component: ListgroupComponent,
  },
  {
    path: 'form',
    component: ListgroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListgroupRoutes {}
