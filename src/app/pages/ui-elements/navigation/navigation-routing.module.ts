import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
  },
  {
    path: 'form',
    component: NavigationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationRoutes {}
