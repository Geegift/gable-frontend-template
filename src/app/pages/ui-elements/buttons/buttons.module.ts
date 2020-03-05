import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { ButtonsRoutes } from './buttons-routing.module';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    ButtonsRoutes
  ]
})
export class ButtonsModule { }
