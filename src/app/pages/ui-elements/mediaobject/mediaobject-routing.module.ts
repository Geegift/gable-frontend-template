import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaobjectComponent } from './mediaobject.component';

const routes: Routes = [
  {
    path: '',
    component: MediaobjectComponent,
  },
  {
    path: 'form',
    component: MediaobjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaobjectRoutes {}
