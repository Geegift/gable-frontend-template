import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './config.component';
import { ThemeComponent } from './theme/theme.component';
import { RouterGuardComponent } from './router-guard/router-guard.component';
import { LanguagesComponent } from './languages/languages.component';


@NgModule({
  declarations: [ConfigComponent, ThemeComponent, RouterGuardComponent, LanguagesComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }
