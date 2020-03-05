import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { AvatarRoutes } from './avatar-routing.module';

@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule,
    AvatarRoutes
  ]
})
export class AvatarModule { }
