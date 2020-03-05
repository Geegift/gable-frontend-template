import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts.component';
import { AlertsRoutes } from './alerts-routing.module';

@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    AlertsRoutes
  ]
})
export class AlertsModule { }
