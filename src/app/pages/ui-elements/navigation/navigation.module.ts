import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NavigationRoutes } from './navigation-routing.module';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    NavigationRoutes
  ]
})
export class NavigationModule { }
