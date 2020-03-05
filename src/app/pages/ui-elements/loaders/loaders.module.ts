import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadersComponent } from './loaders.component';
import { LoadersRoutes } from './loaders-routing.module';

@NgModule({
  declarations: [LoadersComponent],
  imports: [
    CommonModule,
    LoadersRoutes
  ]
})
export class LoadersModule { }
