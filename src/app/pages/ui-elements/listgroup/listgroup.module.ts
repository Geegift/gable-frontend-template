import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListgroupComponent } from './listgroup.component';
import { ListgroupRoutes } from './listgroup-routing.module';

@NgModule({
  declarations: [ListgroupComponent],
  imports: [
    CommonModule,
    ListgroupRoutes
  ]
})
export class ListgroupModule { }
