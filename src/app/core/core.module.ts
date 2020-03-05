import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesComponent } from './directives/directives.component';
import { GuardsComponent } from './guards/guards.component';
import { HelpersComponent } from './helpers/helpers.component';
import { ModelsComponent } from './models/models.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [DirectivesComponent, GuardsComponent, HelpersComponent, ModelsComponent, ServicesComponent],
  imports: [CommonModule],
})
export class CoreModule {}
