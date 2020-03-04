import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LayoutComponent } from './layout/layout.component';
import { WidgetComponent } from './widget/widget.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { ValidatorComponent } from './validator/validator.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [SharedComponent, LayoutComponent, WidgetComponent, PreloaderComponent, ValidatorComponent, HeaderComponent, NavbarComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
