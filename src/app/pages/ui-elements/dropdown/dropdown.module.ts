import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { DropdownRoutes } from './dropdown-routing.module';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    DropdownRoutes
  ]
})
export class DropdownModule { }
