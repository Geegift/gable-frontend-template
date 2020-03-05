import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { PaginationRoutes } from './pagination-routing.module';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    PaginationRoutes
  ]
})
export class PaginationModule { }
