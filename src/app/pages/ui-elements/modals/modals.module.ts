import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsComponent } from './modals.component';
import { ModalsRoutes } from './modals-routing.module';

@NgModule({
  declarations: [ModalsComponent],
  imports: [
    CommonModule,
    ModalsRoutes
  ]
})
export class ModalsModule { }
