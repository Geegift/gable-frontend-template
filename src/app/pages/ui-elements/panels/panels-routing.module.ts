import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelsComponent } from './panels.component';

const routes: Routes = [
  {
    path: '',
    component: PanelsComponent,
  },
  {
    path: 'form',
    component: PanelsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelsRoutes {}
