import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselRoutes } from './carousel-routing.module';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    CarouselRoutes
  ]
})
export class CarouselModule { }
