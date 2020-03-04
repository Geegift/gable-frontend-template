import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AuthComponent } from './auth/auth.component';
import { LanguagesComponent } from './languages/languages.component';


@NgModule({
  declarations: [AccountComponent, AuthComponent, LanguagesComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
