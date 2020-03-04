import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  {
    path: 'form',
    component: TableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableRoutes {}
