import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollapseComponent } from './collapse.component';

const routes: Routes = [
  {
    path: '',
    component: CollapseComponent,
  },
  {
    path: 'form',
    component: CollapseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollapseRoutes {}
