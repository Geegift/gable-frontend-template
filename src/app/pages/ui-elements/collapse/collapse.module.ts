import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseComponent } from './collapse.component';
import { CollapseRoutes } from './collapse-routing.module';

@NgModule({
  declarations: [CollapseComponent],
  imports: [
    CommonModule,
    CollapseRoutes
  ]
})
export class CollapseModule { }
