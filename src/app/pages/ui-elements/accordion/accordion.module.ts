import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionRoutes } from './accordion-routing.module';


@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    AccordionRoutes
  ]
})
export class AccordionModule { }
