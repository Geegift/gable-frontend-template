import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { PopoverRoutes } from './popover-routing.module';

@NgModule({
  declarations: [PopoverComponent],
  imports: [
    CommonModule,
    PopoverRoutes
  ]
})
export class PopoverModule { }
