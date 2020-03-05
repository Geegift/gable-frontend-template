import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
import { BadgeRoutes } from './badge-routing.module';

@NgModule({
  declarations: [BadgeComponent],
  imports: [
    CommonModule,
    BadgeRoutes
  ]
})
export class BadgeModule { }
