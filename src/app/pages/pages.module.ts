import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesRoutingModule } from './pages-routing.module';
import { PopoverComponent } from './ui-elements/popover/popover.component';
import { ProgressComponent } from './ui-elements/progress/progress.component';

@NgModule({
  declarations: [PopoverComponent, ProgressComponent],
  imports: [CommonModule, PagesRoutingModule, CommonModule, NgbDropdownModule, PagesRoutingModule],
})
export class PagesModule {}
