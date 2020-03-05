import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { ProgressRoutes } from './progress-routing.module';

@NgModule({
  declarations: [ProgressComponent],
  imports: [
    CommonModule,
    ProgressRoutes
  ]
})
export class ProgressModule { }
