import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardsRoutes } from './cards-routing.module';

@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    CardsRoutes
  ]
})
export class CardsModule { }
