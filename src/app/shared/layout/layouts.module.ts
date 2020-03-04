import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';

import { NgbDatepickerModule, NgbPaginationModule, NgbTabsetModule, NgbAccordionModule, NgbModalModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [LayoutComponent, FooterComponent, NavbarComponent, HeaderComponent, SidebarComponent, TopbarComponent],
  imports: [CommonModule, RouterModule, NgbDropdownModule, NgbCollapseModule, NgbDatepickerModule, NgbPaginationModule, NgbTabsetModule, NgbAccordionModule, NgbModalModule, NgbAlertModule, NgbModule],
})
export class LayoutsModule {}
