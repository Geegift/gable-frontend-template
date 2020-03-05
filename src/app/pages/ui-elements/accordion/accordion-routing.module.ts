import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './accordion.component';

const routes: Routes = [
  {
    path: '',
    component: AccordionComponent,
  },
  {
    path: 'form',
    component: AccordionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionRoutes {}
