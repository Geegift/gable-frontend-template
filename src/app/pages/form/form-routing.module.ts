import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';

const routes: Routes = [
  { path: 'form-elements', component: FormElementsComponent },
  { path: 'form-layouts', component: FormLayoutsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutes {}
