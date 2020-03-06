import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ImagesComponent } from './images/images.component';
import { ListgroupComponent } from './listgroup/listgroup.component';
import { LoadersComponent } from './loaders/loaders.component';
import { MediaobjectComponent } from './mediaobject/mediaobject.component';
import { ModalsComponent } from './modals/modals.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelsComponent } from './panels/panels.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  { path: 'accordion', component: AccordionComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'avatar', component: AvatarComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'collapse', component: CollapseComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'listgroup', component: ListgroupComponent },
  { path: 'loaders', component: LoadersComponent },
  { path: 'mediaobject', component: MediaobjectComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'panels', component: PanelsComponent },
  { path: 'popover', component: PopoverComponent },
  { path: 'progress', component: ProgressComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiElementsRoutingModule {}
