import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { TypoComponent } from './pages/typo/typo.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './pages/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxPopper } from 'angular-popper';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: 'typo', component: TypoComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
  declarations: [AppComponent, FormComponent, TypoComponent, DashboardComponent, TableComponent, FooterComponent, NavbarComponent, SidebarComponent, TopbarComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, RouterModule.forRoot(appRoutes), NgxPopper],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
