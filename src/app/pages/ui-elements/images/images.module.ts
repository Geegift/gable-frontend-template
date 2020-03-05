import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images.component';
import { ImagesRoutes } from './images-routing.module';

@NgModule({
  declarations: [ImagesComponent],
  imports: [
    CommonModule,
    ImagesRoutes
  ]
})
export class ImagesModule { }
