import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelsComponent } from './panels.component';
import { PanelsRoutes } from './panels-routing.module';

@NgModule({
  declarations: [PanelsComponent],
  imports: [
    CommonModule,
    PanelsRoutes
  ]
})
export class PanelsModule { }
