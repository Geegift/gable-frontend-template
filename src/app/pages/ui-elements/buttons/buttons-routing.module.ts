import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonsComponent,
  },
  {
    path: 'form',
    component: ButtonsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsRoutes {}
