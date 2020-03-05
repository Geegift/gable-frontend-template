import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { BreadcrumbsRoutes } from './breadcrumbs-routing.module';

@NgModule({
  declarations: [BreadcrumbsComponent],
  imports: [
    CommonModule,
    BreadcrumbsRoutes
  ]
})
export class BreadcrumbsModule { }
