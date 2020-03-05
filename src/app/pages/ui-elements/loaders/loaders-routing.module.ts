import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadersComponent } from './loaders.component';

const routes: Routes = [
  {
    path: '',
    component: LoadersComponent,
  },
  {
    path: 'form',
    component: LoadersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadersRoutes {}
