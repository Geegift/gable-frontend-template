import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiElementsRoutingModule } from './ui-elements/ui-elements-routing.module';
import { FormRoutes } from './form/form-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule),
  },
  {
    path: 'typo',
    loadChildren: () => import('./typo/typo.module').then(m => m.TypoModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, UiElementsRoutingModule, FormRoutes],
})
export class PagesRoutingModule {}
