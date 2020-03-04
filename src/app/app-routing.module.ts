import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  // { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  // { path: 'cofig', loadChildren: () => import('./config/config.module').then(m => m.ConfigModule) },
  // { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  // { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  // { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
