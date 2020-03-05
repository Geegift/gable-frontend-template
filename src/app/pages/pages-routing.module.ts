import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then(m => m.FormModule),
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule),
  },
  {
    path: 'typo',
    loadChildren: () => import('./typo/typo.module').then(m => m.TypoModule),
  },
  {
    path: 'accordion',
    loadChildren: () => import('./ui-elements/accordion/accordion.module').then(m => m.AccordionModule),
  },
  {
    path: 'alerts',
    loadChildren: () => import('./ui-elements/alerts/alerts.module').then(m => m.AlertsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
