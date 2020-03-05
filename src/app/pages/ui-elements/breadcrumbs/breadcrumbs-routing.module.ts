import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from './breadcrumbs.component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsComponent,
  },
  {
    path: 'form',
    component: BreadcrumbsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadcrumbsRoutes {}
