import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaobjectComponent } from './mediaobject.component';
import { MediaobjectRoutes } from './mediaobject-routing.module';

@NgModule({
  declarations: [MediaobjectComponent],
  imports: [
    CommonModule,
    MediaobjectRoutes
  ]
})
export class MediaobjectModule { }
