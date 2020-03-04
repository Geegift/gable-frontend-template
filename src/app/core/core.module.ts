import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { DirectivesComponent } from './directives/directives.component';
import { GuardsComponent } from './guards/guards.component';
import { HelpersComponent } from './helpers/helpers.component';
import { ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [CoreComponent, DirectivesComponent, GuardsComponent, HelpersComponent, ModelsComponent, ServicesComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
