import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormAdvancedComponent } from './form-advanced/form-advanced.component';

const routes: Routes = [
  { path: 'form-elements', component: FormElementsComponent },
  { path: 'form-layouts', component: FormAdvancedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutes {}
